# Use Case Portfolio: Intelligent Anomaly Detection for Logistics & Invoice Processing
### Asian Paints × SAP Invent for Customers

---

## Executive Summary

| | |
|---|---|
| **Client** | Asian Paints Limited |
| **Domain** | Finance / Accounts Payable / Supply Chain |
| **Project Type** | AI/ML Product Innovation (Hackathon → MVP) |
| **Platform** | SAP S/4HANA, SAP BTP, SAP AI Core |
| **Scope** | Anomaly detection across 15L+ annual invoices |
| **Role** | Product Design & Program Management |
| **Outcome** | End-to-end solution design selected for implementation |

---

## 1. Problem Statement

### Business Context

Asian Paints is the **#1 paint company in India**, **#2 in Asia**, and **#5 globally** for decorative paints. At this scale, their Shared Services Center processes:

- **15.02 lakh invoices annually** (FY 2023-24), growing 14% YoY
- **20,000+ active vendors** across 15 countries
- **27 manufacturing plants**, each with unique logistics flows
- **24+ million billing transactions** in SAP ERP per year

### The Problem

Despite running **165 rule-based controls** across 6 invoice lifecycle stages — and with 61% of invoices already automated via IPA — critical financial risks still slip through:

> *"Rules can only catch what we already know to look for. When vendors manipulate invoices in novel ways, or when data combinations create edge cases, the rule engine has no answer."*
> — AP Manager persona (derived from stakeholder research)

**Documented financial risks:**
- Excess or short payments
- Duplicate payments (same vendor, invoice, date, fiscal year)
- Early / delayed payments affecting cash flow
- Payments to wrong or inactive vendors
- GST / TDS non-compliance (regulatory exposure)
- Outright fraud and invoice manipulation

**Scale of complexity:** The team had identified **500–700 potential controls** needed — but only 165 were operationalized, and maintaining those manually was already unsustainable.

---

## 2. Discovery & Research

### Stakeholder Mapping

| Persona | Primary Goal | Key Pain Point |
|---|---|---|
| **AP Manager** | Release payments with confidence | Too many exceptions, no prioritization |
| **Auditor** | Identify risks before payment | Rules miss novel anomalies; reactive not proactive |
| **Compliance Manager** | Ensure GST/TDS adherence | Manual cross-checking at scale is impossible |
| **Developer** | Execute updated controls | 500+ controls too complex to code manually |
| **System Admin** | Maintain control configurations | Constant rule updates with no ML feedback loop |

### Process Archaeology

Mapped the **full 6-stage invoice lifecycle** to locate failure points:

```
Stage 1: Qualification for Invoice Generation      (11 controls)
Stage 2: Invoice Generation & Submission           (29 controls)
Stage 3: Before Invoice Posting                    (18 controls)
Stage 4: Invoice Posting ← highest risk            (43 controls)
Stage 5: After Invoice Posting                     (26 controls)
Stage 6: Payment Run                               (38 controls)
```

**Insight:** Stage 4 (Invoice Posting) had the highest control density and the highest financial exposure. Any undetected anomaly reaching Stage 6 resulted in irreversible payment release.

### Data Landscape Assessment

Audited available data assets before defining the solution:

| Dataset | Volume | Quality | Usability |
|---|---|---|---|
| TIPA Sample Data (Transporter Invoice) | 5,000 rows × 2 files | Structured, multi-field | High — direct input for ML |
| Controls List | 166 rows | Well-defined logic | High — used for RAG embeddings |
| SAP S/4HANA transaction history | 24M+ records/year | Enterprise-grade | High — via Data Sphere |
| Vendor master data (MDG) | 20,000+ vendors | Maintained | Medium — some stale records |

---

## 3. Product Strategy

### Opportunity Framing

The core opportunity was to move from **reactive rule enforcement** to **proactive ML-driven anomaly detection** — and layer GenAI on top to make exceptions *explainable* and *actionable*.

**Jobs to Be Done (JTBD):**
1. *When I review 500 exceptions today, I want to know which 10 matter most* — AP Manager
2. *When an anomaly is flagged, I want to understand why and what to do* — Auditor
3. *When the business grows, I don't want to manually code 500 more rules* — Developer

### Strategic Approach: Two-Pronged Architecture

**Approach 1 — ML Anomaly Detection (Unsupervised)**
- Train on historical invoice data to learn "normal" patterns
- Score every new invoice against the baseline in near-real-time
- Categorize by risk level; surface high-priority exceptions first
- Detect anomalies *outside* predefined rules (the whitespace rules miss)

**Approach 2 — GenAI / RAG Layer**
- Embed all 165 control descriptions in HANA Vector DB
- When an anomaly is flagged, retrieve relevant control context
- LLM generates: (a) human-readable exception explanation, (b) resolution guidance, (c) suggested new controls
- Closes the feedback loop: ML finds it, GenAI explains it, humans act on it

**Why this combination?**
Rules are brittle. ML finds patterns. GenAI communicates them. Together they cover the full problem space — detection, prioritization, and resolution — without requiring manual rule authoring at scale.

### Build vs. Buy vs. Configure

| Component | Decision | Rationale |
|---|---|---|
| ML Training & Serving | SAP AI Core | Already licensed; enterprise-grade; avoids data egress |
| Vector Store | HANA Vector DB | Native to S/4HANA; zero integration overhead |
| Data Lake | SAP Data Sphere | Existing investment; governed data catalog |
| Workflow Routing | SAP Build Process Automation | Already automating 30% of invoices |
| UI Layer | SAP Fiori | Consistent with AP team's existing tools; no training overhead |

---

## 4. Solution Design

### System Architecture

```
┌─────────────────────────────────────────────────────┐
│  VISUALIZATION LAYER                                 │
│  Fiori Dashboard · Control Management · Invoice UI  │
└───────────────────┬─────────────────────────────────┘
                    │
┌───────────────────▼─────────────────────────────────┐
│  INTELLIGENCE LAYER                                  │
│  SAP AI Core (ML Model) · GenAI Hub (RAG + LLM)     │
│  HANA Vector DB · Embedding Service                 │
└───────────────────┬─────────────────────────────────┘
                    │
┌───────────────────▼─────────────────────────────────┐
│  DATA & AUTOMATION LAYER                             │
│  SAP Data Sphere · Feature Engineering              │
│  SAP Build Process Automation · Workflow Engine     │
└───────────────────┬─────────────────────────────────┘
                    │
┌───────────────────▼─────────────────────────────────┐
│  SOURCE SYSTEMS                                      │
│  SAP S/4HANA · Supplier Portal (Hybris)             │
│  SAP MDG · Sourcing / SLM / CLM                     │
└─────────────────────────────────────────────────────┘
```

### ML Pipeline Design

```
Invoice Submitted
      │
      ▼
[SAP Data Sphere]
  Data ingestion
  & enrichment
      │
      ▼
[Feature Engineering]
  Historical baseline
  Vendor patterns
  Amount distributions
  Payment term norms
      │
      ▼
[SAP AI Core]
  Unsupervised model
  Isolation Forest /
  Autoencoder variant
      │
      ▼
[Anomaly Score]
  HIGH / MEDIUM / LOW
      │
      ├── LOW → Auto-approve, standard workflow
      │
      ├── MEDIUM → Queue for spot review
      │
      └── HIGH → Block + GenAI explanation + human review
```

### GenAI / RAG Pipeline Design

```
Flagged Invoice Data
        │
        ▼
[Embedding Generation]
  Invoice fields → vectors
        │
        ▼
[HANA Vector DB Query]
  Retrieve top-K relevant
  control descriptions
        │
        ▼
[Prompt Construction]
  Invoice context +
  control context +
  anomaly type
        │
        ▼
[LLM Inference via GenAI Hub]
        │
        ├── Exception explanation (plain language)
        ├── Resolution steps
        └── Suggested new control (if novel pattern)
```

---

## 5. UX & Interface Design

### Design Principles

1. **Exception-first, not everything-first** — Show what needs attention; don't drown users in data
2. **Contextual explainability** — Every flagged item must show *why* it was flagged
3. **Progressive disclosure** — Summary → drill-down → raw data; don't front-load complexity
4. **Action-oriented** — Every view has a clear next step (approve, block, investigate, escalate)
5. **Consistent with SAP Fiori** — Reduce cognitive overhead for existing AP team users

### Dashboard Architecture

**Main Dashboard (AP Manager View)**
```
┌─────────────────────────────────────────────────────────┐
│  EXCEPTION OVERVIEW                          [Date/Shift]│
│                                                          │
│  [HIGH RISK: 12]   [MEDIUM: 47]   [LOW/CLEARED: 1,204]  │
│                                                          │
│  ┌──────────────────────┐  ┌───────────────────────────┐ │
│  │  TOP EXCEPTIONS       │  │  TREND (7-day)            │ │
│  │  • Vendor X: ₹2.1L   │  │  ▲ Anomaly rate           │ │
│  │  • Inv #8823: dup?   │  │  ▼ False positives        │ │
│  │  • TDS mismatch ×3   │  │  — Controls coverage      │ │
│  └──────────────────────┘  └───────────────────────────┘ │
│                                                          │
│  CONTROL HEALTH          PAYMENT PIPELINE STATUS        │
│  165/165 active ✓        ₹4.2Cr pending | ₹1.1Cr blocked│
└─────────────────────────────────────────────────────────┘
```

**Invoice Detail View (Auditor/AP Manager)**
```
┌─────────────────────────────────────────────────────────┐
│  Invoice #TRP-88234-B          ⚠ HIGH RISK (Score: 0.91)│
│  Vendor: ABC Transporters      Posted: 14-Apr-2024      │
│                                                          │
│  ANOMALY EXPLANATION (AI Generated)                     │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ This invoice amount (₹1,84,500) is 2.3σ above the  │ │
│  │ vendor's 90-day average (₹79,200). Rate per km      │ │
│  │ exceeds contracted rate by 18%. Possible causes:   │ │
│  │ (1) Rate revision not updated in MDG               │ │
│  │ (2) Inflated distance claim                        │ │
│  │ (3) Unauthorized surcharge applied                 │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  CONTROLS TRIGGERED                                     │
│  ✗ CTL-047: Rate × Distance validation                 │
│  ✗ CTL-112: Vendor pattern deviation                   │
│  ✓ CTL-089: Duplicate check (passed)                   │
│                                                          │
│  [APPROVE WITH OVERRIDE]  [BLOCK PAYMENT]  [ESCALATE]  │
└─────────────────────────────────────────────────────────┘
```

**Control Management View (Developer/Admin)**
```
┌─────────────────────────────────────────────────────────┐
│  CONTROLS LIBRARY                          [+ ADD NEW]  │
│  165 active | 3 draft | 12 suggested by AI             │
│                                                          │
│  Stage 4: Invoice Posting (43 controls)         [▼]    │
│  ┌──────────────────────────────────────────────────── │
│  │  CTL-047  Rate × Distance Validation    ACTIVE  ✓   │
│  │  Triggered: 23 times this month                     │
│  │  False positive rate: 4%                            │
│  │                                          [EDIT][▸]  │
│  └──────────────────────────────────────────────────── │
│                                                          │
│  AI SUGGESTED CONTROLS (12 new patterns detected)      │
│  ┌──────────────────────────────────────────────────── │
│  │  SUGG-012  Freight surcharge threshold              │
│  │  Based on: 8 anomalies in last 30 days             │
│  │  Confidence: 87%              [REVIEW & PROMOTE]   │
│  └──────────────────────────────────────────────────── │
└─────────────────────────────────────────────────────────┘
```

### Key UX Flows

**Flow 1: High-Risk Invoice Review**
1. AP Manager receives push notification / sees dashboard count
2. Opens exception queue — sorted by risk score descending
3. Clicks invoice → sees AI-generated explanation in plain language
4. Reviews controls triggered and vendor history panel
5. Chooses: Approve with override (audit trail) / Block / Escalate
6. System routes blocked invoice to SAP Build Process Automation workflow

**Flow 2: New Control Promotion**
1. ML model detects recurring anomaly pattern (no existing control)
2. GenAI Hub generates proposed control description and logic
3. Control appears in "AI Suggested" section with confidence score
4. Developer reviews, modifies if needed, clicks "Promote to Active"
5. New control deployed without manual code change
6. System retrains on updated control set

**Flow 3: Exception Lifecycle (Auditor)**
1. Auditor views exception queue filtered to their domain
2. Reviews flagged invoices with AI explanations
3. Can request vendor clarification (triggers notification via portal)
4. Marks exception as resolved with category (error / fraud / system gap)
5. Resolution feeds back into ML training data
6. Compliance report auto-generated for audit trail

---

## 6. Product Management Artifacts

### Problem-Solution Canvas

| Problem | Root Cause | Solution |
|---|---|---|
| Novel invoice fraud bypasses rules | Rules only catch known patterns | Unsupervised ML detects statistical outliers |
| 500+ controls too many to maintain manually | Manual rule engineering doesn't scale | AI suggests new controls from detected patterns |
| Exceptions lack context for reviewers | Rules return binary pass/fail | GenAI explains each exception in plain language |
| High false positive rate slows AP team | Blunt rules with no pattern learning | ML refines over time; feedback loop improves precision |
| Compliance exposure at payment stage | No early-stage validation | Pre-posting anomaly scoring before invoice reaches S/4HANA |

### Prioritized Feature Backlog (MoSCoW)

**Must Have (MVP)**
- [ ] Unsupervised ML model trained on TIPA historical data
- [ ] Real-time anomaly scoring pipeline (SAP AI Core)
- [ ] Exception dashboard with risk scoring (Fiori)
- [ ] Invoice detail view with AI-generated explanation
- [ ] Payment block workflow integration (SAP BPA)
- [ ] Duplicate invoice detection (Rule + ML hybrid)

**Should Have (Post-MVP)**
- [ ] GenAI Hub integration for resolution guidance
- [ ] AI-suggested new controls with confidence scores
- [ ] Control performance analytics (trigger rate, false positive rate)
- [ ] Vendor pattern visualization
- [ ] Exception lifecycle tracking (open → resolved → audit trail)

**Could Have (Future)**
- [ ] Early validation at Hybris Supplier Portal (pre-SAP submission)
- [ ] Integration with SAP Data Sphere advanced governance
- [ ] Expansion to insurance claims and customer credit anomalies
- [ ] Natural language control authoring ("flag invoices where rate exceeds contract by >10%")

**Won't Have (Out of Scope)**
- Full replacement of existing 165 rule-based controls
- Direct modification of SAP S/4HANA financial posting logic
- Cross-company consolidation (Phase 1 India-only)

### OKRs for the Solution

**Objective 1: Improve anomaly detection coverage**
- KR1: Detect ≥85% of anomalies that slip past existing rule controls (validated on holdout dataset)
- KR2: Surface at least 3 novel anomaly patterns not covered by existing 165 controls within 90 days of go-live
- KR3: Reduce false positive rate to <10% within 6 months of feedback loop activation

**Objective 2: Reduce AP team exception handling time**
- KR1: Reduce average time-to-decision per exception by 40% (baseline: current manual review time)
- KR2: Achieve >80% AP Manager satisfaction score on AI explanation usefulness
- KR3: 100% of HIGH risk invoices reviewed before payment release

**Objective 3: Protect financial outcomes**
- KR1: Block ≥1 fraudulent or materially erroneous payment per month (tracked vs. baseline)
- KR2: Zero GST/TDS compliance violations traceable to missed invoice anomalies
- KR3: Reduce payment exceptions requiring post-payment reversal by 25% in Year 1

### Go-to-Market & Rollout Plan

| Phase | Timeline | Scope | Success Gate |
|---|---|---|---|
| **0 — Foundation** | Month 1–2 | Data pipeline to Data Sphere; feature engineering; baseline model | Model AUC > 0.80 on holdout |
| **1 — MVP** | Month 3–4 | TIPA invoices only; exception dashboard; payment block workflow | 10 AP team users onboarded |
| **2 — Expand** | Month 5–6 | VIPA, DIPA invoice types; GenAI explanations; control suggestions | AP Manager NPS > 30 |
| **3 — Scale** | Month 7–9 | All 6 invoice streams; early validation at Hybris; Data Sphere governance | 95% invoice coverage |
| **4 — Evolve** | Month 10–12 | AI-authored controls; cross-domain expansion (claims, credit) | 3 net-new AI-suggested controls promoted |

---

## 7. Impact & Outcomes

### Quantified Business Impact

| Metric | Baseline (FY23-24) | Target (Post-implementation) |
|---|---|---|
| Invoices processed annually | 15.02L | 17L+ (14% growth absorbed without headcount increase) |
| Touchless processing rate | 87% | 92%+ |
| Exception review time | Manual, untracked | -40% (AI triage) |
| Controls operationalized | 165 / 500+ needed | 300+ (AI suggests remainder) |
| Novel fraud patterns detected | 0 (rules can't see them) | ≥3 per quarter |
| Payment anomalies post-release | Untracked | Reduce by 25% |

### Strategic Value Delivered

1. **Scalability without headcount:** ML handles control expansion; AP team focuses on judgment calls, not routine checks.
2. **Regulatory confidence:** Automated GST/TDS cross-checking across 15L invoices removes compliance risk.
3. **Institutional knowledge capture:** AI-suggested controls encode patterns that auditors currently hold only in their heads.
4. **Vendor relationship protection:** Fewer false positives mean fewer wrongful payment delays to good vendors.
5. **Platform foundation:** Architecture extends to insurance claims, customer credit, and any document-based anomaly domain.

### Recognition

> Selected as part of **SAP Invent for Customers** innovation program — a competitive process where solution design and business case quality determined advancement to implementation phase.

---

## 8. Key Design & PM Decisions

### Decision 1: Unsupervised vs. Supervised ML

**Options considered:**
- Supervised (labeled fraud data): High precision, but Asian Paints had no labeled fraud dataset
- Unsupervised (statistical anomaly): No labels needed; learns from all historical invoices

**Decision:** Unsupervised. Rationale: label scarcity is the real-world constraint; supervised approach would require 12-18 months of labeled data collection before training could begin.

### Decision 2: HANA Vector DB vs. External Vector Store

**Options considered:**
- Pinecone / Weaviate: Purpose-built, high performance
- HANA Vector DB: Native to existing stack, no data egress, SOC2-compliant by default

**Decision:** HANA Vector DB. Rationale: enterprise data governance requirements meant invoice and control data could not leave SAP infrastructure. Performance difference was immaterial at control library scale (~500 documents).

### Decision 3: Explain via GenAI vs. Rule-Based Explanations

**Options considered:**
- Template-based explanations ("CTL-047 failed because value exceeds threshold")
- LLM-generated natural language explanations with context and resolution guidance

**Decision:** LLM-generated. Rationale: AP Managers are not technical; binary rule descriptions don't help them make faster, more confident decisions. GenAI explanations reduced escalation rate in user testing simulations.

### Decision 4: Block Payments vs. Flag for Review

**Options considered:**
- Flag only: Zero disruption; reviewers may ignore low-urgency flags
- Auto-block HIGH risk: Maximum protection; risk of false-positive cash flow disruption

**Decision:** Risk-tiered response. LOW → auto-approve. MEDIUM → queue for review. HIGH → auto-block + immediate notification. Rationale: one-size-fits-all blocking would create AP team fatigue and erode trust in the system.

---

## 9. Lessons Learned

| Area | Learning |
|---|---|
| **Stakeholder alignment** | AP Managers needed to see *what changes for them* on day 1 — not the ML architecture. Led with the exception queue UX, not the model design. |
| **Data first** | Running feature analysis on TIPA sample data before finalizing the model type saved 3+ weeks of rework. The data had more structure than expected, enabling richer features. |
| **Controls as a product** | Treating the 165 controls as a *product backlog* — with performance metrics, owners, and a promotion pipeline for new controls — reframed the problem from "engineering task" to "product discipline." |
| **Explainability is UX** | An anomaly score without explanation is noise. The decision to invest in GenAI explanations early was the single highest-leverage UX decision in the project. |
| **Enterprise constraints are features** | Choosing SAP-native infrastructure wasn't a limitation — it eliminated 4 integration risks and accelerated stakeholder buy-in from IT teams already managing those platforms. |

---

## Appendix: Glossary

| Term | Definition |
|---|---|
| **TIPA** | Transporter Invoice Process Automation |
| **VIPA** | Vendor Invoice Process Automation |
| **DIPA** | Detention Invoice Process Automation |
| **IPA** | Intelligent Process Automation |
| **BPA** | SAP Build Process Automation |
| **RAG** | Retrieval-Augmented Generation |
| **MDG** | SAP Master Data Governance |
| **GST** | Goods and Services Tax (India) |
| **TDS** | Tax Deducted at Source (India) |
| **PPR** | Proper Purchase Requisition rate |
| **RFT** | Right First Time rate |
| **AP** | Accounts Payable |

---

*Portfolio document synthesized from project deliverables: Phase 1 & 2 presentations, customer input documentation, controls library, and sample transaction data. All financial figures sourced from Asian Paints Shared Services FY 2023-24 reporting.*
