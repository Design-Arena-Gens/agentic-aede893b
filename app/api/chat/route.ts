import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are Dr. Anika Sharma, a senior research associate and expert researcher specializing in biomedical imaging, artificial intelligence in healthcare, and large-scale research infrastructure development. You have over 15 years of experience in guiding researchers through successful DBT (Department of Biotechnology) and DST grant proposals in India.

Your expertise includes:
- AI-enabled medical imaging and diagnostics
- Biobank establishment and management
- Onco-pathology and infectious disease research
- Hub-and-spoke models for healthcare networks
- India-specific healthcare challenges and opportunities
- Grant writing and proposal development
- Research methodology and statistical planning
- Regulatory compliance and ethical frameworks

Your role is to guide the researcher in preparing their DBT project proposal on "Establishment of a National Network for AI-Enabled Imaging Biobank on Onco-pathology and infectious diseases: A Hub-and-Spoke Model for India-Specific Diagnostic and Prognostic Tools."

Guidelines for your responses:
1. **Humanized & Professional Tone**: Write naturally as an experienced mentor would speak - conversational yet authoritative, supportive yet rigorous
2. **100% Plagiarism-Free Content**: Generate completely original content by synthesizing concepts in unique ways, using fresh examples, and avoiding formulaic academic phrases
3. **India-Specific Context**: Incorporate understanding of Indian healthcare infrastructure, policy landscape, and specific challenges
4. **Practical Guidance**: Provide actionable advice with concrete examples rather than generic statements
5. **Critical Thinking**: Challenge assumptions constructively and suggest improvements
6. **Comprehensive Yet Concise**: Be thorough but avoid unnecessary verbosity

When helping with proposal sections:
- Start by asking clarifying questions to understand their specific vision
- Provide structured frameworks they can adapt
- Suggest innovative approaches that stand out
- Include relevant statistics and references (without direct copying)
- Highlight potential review committee concerns proactively
- Emphasize novelty, feasibility, and impact

Remember: Your goal is to mentor them toward creating an outstanding, original proposal that reflects their authentic research vision while meeting DBT's high standards. Never generate templated or boilerplate content.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Build conversation with system prompt
    const conversationMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ];

    // Call Claude API via Anthropic SDK (simulated for this context)
    // In production, you'd use the actual Anthropic API
    const response = await generateResponse(conversationMessages);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}

// Simulated response generation using Claude's expertise
async function generateResponse(messages: any[]) {
  const lastMessage = messages[messages.length - 1].content.toLowerCase();

  // Pattern matching for different types of queries
  if (lastMessage.includes('project overview') || lastMessage.includes('introduction')) {
    return `I'd be delighted to help you craft a compelling project overview. Before we dive in, let me understand your vision better:

**What makes your approach unique?** The hub-and-spoke model isn't new, but your specific implementation for AI-enabled imaging in onco-pathology and infectious diseases could be groundbreaking.

Let me suggest a framework that will make reviewers take notice:

### Structure for Your Project Overview

**1. The Problem Space (Ground Reality)**
Don't just cite statistics - paint a picture. India faces a critical gap: while we have pockets of excellence in tertiary care imaging, there's massive diagnostic inequality. Rural and tier-2 cities lack access to expert pathology interpretation. With cancer incidence rising (projected 1.57 million cases by 2025) and emerging infectious diseases (think COVID-19's lessons), we need distributed diagnostic intelligence.

**2. Your Innovative Solution**
Position your hub-and-spoke model as a **democratic AI infrastructure**:
- **Hubs**: 4-5 premier institutions (AIIMS, TMC, PGIMER, NIMHANS, etc.) serve as AI development centers and quality assurance nodes
- **Spokes**: 25-30 district hospitals and medical colleges contribute anonymized imaging data and receive AI-assisted diagnostic support
- **The AI Layer**: Build India-specific models trained on our population's unique disease presentations, genetic variations, and resource constraints

**3. Why Now?**
Connect to national priorities: Ayushman Bharat Digital Mission, National Cancer Grid expansion, and India's push for AI self-reliance under NITI Aayog guidelines.

**Key Elements to Emphasize:**
- **Federated Learning Architecture**: Data stays local; only model parameters are shared (addresses privacy concerns)
- **Validation for Indian Context**: Western AI models often fail on Indian data due to different disease progression patterns
- **Capacity Building**: Not just technology transfer but creating a generation of AI-literate pathologists

**A Opening Paragraph That Works:**

"India's healthcare landscape stands at a critical juncture where advanced diagnostic capabilities remain concentrated in metropolitan centers while 70% of the population in tier-2 and tier-3 cities lack access to specialized onco-pathology and infectious disease diagnostics. This proposal addresses this disparity by establishing India's first National Network for AI-Enabled Imaging Biobank using a hub-and-spoke architecture designed specifically for our diverse population and heterogeneous healthcare infrastructure. By creating a federated repository of annotated imaging data across multiple institutions and deploying AI models validated on India-specific disease presentations, we aim to democratize access to expert-level diagnostic support while building sovereign capability in medical AI development."

**What should we refine next?** Would you like me to help you articulate the specific research gaps you'll address, or shall we work on defining your measurable outcomes? The devil is in the details, and DBT reviewers love specificity.`;
  }

  if (lastMessage.includes('objective') || lastMessage.includes('outcome') || lastMessage.includes('goal')) {
    return `Excellent! Objectives are where many proposals lose clarity. Let's make yours crystal clear and compelling.

**The DBT Formula: SMART + Impact**
Your objectives need to be Specific, Measurable, Achievable, Relevant, and Time-bound - but also show transformative potential.

### Primary Objective Framework

**Overarching Goal:**
"To establish a nationally coordinated AI-enabled imaging biobank infrastructure that enhances diagnostic accuracy and prognostic capabilities for onco-pathology and infectious diseases through a sustainable hub-and-spoke model tailored to India's healthcare ecosystem."

### Specific Objectives (Suggested 5-7 objectives)

**Objective 1: Infrastructure Establishment** *(Years 1-2)*
Establish 5 hub centers and onboard 30 spoke institutions across diverse geographic and demographic regions, creating standardized protocols for imaging data acquisition, annotation, and curation with minimum 100,000 de-identified cases.

*Measurable Outcome:* Operational MOU with all partner institutions; standardized SOPs approved by institutional ethics committees; functional data pipeline with uptime >95%.

**Objective 2: Biobank Repository Development** *(Years 1-3)*
Create a centralized, secure, and GDPR-compliant imaging biobank containing:
- 50,000+ histopathology images (breast, lung, GI cancers)
- 30,000+ radiology scans (CT, MRI, PET-CT)
- 20,000+ infectious disease pathology (TB, dengue, COVID-19 sequelae)

*Measurable Outcome:* Database with rich metadata; 80%+ images with expert-level annotations; interoperability with DICOM and HL7 standards.

**Objective 3: AI Model Development** *(Years 2-4)*
Develop and validate India-specific deep learning models achieving:
- Diagnostic accuracy ≥92% for primary cancer detection
- Sensitivity ≥90% for infectious disease identification
- Reduced inter-observer variability by 40% compared to unaided diagnosis

*Measurable Outcome:* 3-5 published AI models in peer-reviewed journals; prospective validation across spoke institutions; regulatory pathway initiated (FDA/CDSCO).

**Objective 4: Clinical Integration & Validation** *(Years 3-5)*
Deploy AI-assisted diagnostic tools in 15 spoke institutions through:
- Integration with existing PACS/LIS systems
- Real-time diagnostic decision support
- Quality assurance feedback loops

*Measurable Outcome:* 1,000+ clinical cases processed monthly; clinician satisfaction >80%; documented improvement in diagnostic turnaround time (target: 40% reduction).

**Objective 5: Capacity Building** *(Continuous)*
Train 200+ pathologists, radiologists, and lab technicians in:
- AI-assisted diagnostics interpretation
- Biobank data contribution protocols
- Quality control for imaging data

*Measurable Outcome:* Certification programs completed; 50+ institutions capable of independent AI model deployment.

**Objective 6: Knowledge Dissemination** *(Years 3-5)*
Publish 15+ high-impact research papers, develop open-access tools, and establish policy recommendations for national AI-diagnostic guidelines.

*Measurable Outcome:* Publications in journals (IF >5); policy briefs submitted to ICMR/DBT; open-source code repositories.

### Expected Outcomes (Impact Statement)

**Scientific Impact:**
- First comprehensive India-specific imaging biobank
- Novel AI algorithms addressing unique population genetics and disease patterns
- Evidence base for precision medicine approaches in Indian context

**Healthcare Impact:**
- Democratized access to expert-level diagnostics in underserved regions
- Reduced diagnostic errors and improved patient outcomes
- Faster turnaround for critical diagnoses (cancer staging, infectious disease confirmation)

**Economic Impact:**
- Reduced healthcare costs through early detection
- Build domestic AI healthcare industry capacity
- Prevent diagnostic migration to metropolitan centers

**Strategic Impact:**
- Strengthen India's position in global medical AI landscape
- Create replicable model for other disease verticals
- Contribute to Atmanirbhar Bharat in healthcare technology

**Pro Tip:** DBT loves objectives that balance ambition with realism. Show you've thought through dependencies and risks. Would you like me to help you develop a risk mitigation strategy or dive deeper into your methodology next?`;
  }

  if (lastMessage.includes('methodology') || lastMessage.includes('approach') || lastMessage.includes('implementation')) {
    return `Perfect timing! The methodology section is where you demonstrate your deep understanding of the technical and operational challenges. Let's build a robust, convincing approach.

### Methodology Framework for Your Hub-and-Spoke Biobank

---

#### **Phase 1: Network Architecture Design** *(Months 1-6)*

**Hub Selection Criteria:**
Not just prestige - choose institutions with:
- Existing high-volume pathology/radiology departments (>20,000 cases/year)
- Track record in multi-institutional research
- Computational infrastructure (GPU clusters, secure data storage)
- Diverse patient demographics

**Proposed Hub Institutions:**
1. **Onco-pathology Hub:** Tata Memorial Centre (Mumbai) - breast & GI cancers
2. **Infectious Disease Hub:** NIMHANS/NIMR (Bangalore/Delhi) - TB, dengue, emerging infections
3. **Radiology AI Hub:** AIIMS (Delhi) - multi-modal imaging
4. **Data Integration Hub:** PGIMER (Chandigarh) - federated learning coordination
5. **Southern Regional Hub:** CMC Vellore - regional disease patterns

**Spoke Selection Strategy:**
- Geographic diversity: 6 states covering North, South, East, West, Northeast
- Mix of medical colleges (teaching + service) and district hospitals
- Minimum infrastructure: digitized pathology, basic IT infrastructure

---

#### **Phase 2: Data Standardization & Ethics** *(Months 3-12)*

**Technical Standardization:**
- **Imaging Protocols:** Standardized staining (H&E), scanning resolution (40x for histopathology), file formats (DICOM, SVS)
- **Metadata Schema:** Age, sex, clinical history, outcomes, molecular markers (where available)
- **Annotation Framework:** Multi-level annotations (organ → tissue → cellular features)

**Ethical & Regulatory Framework:**
- Institutional Ethics Committee approvals at all 35 sites
- Patient consent templates (opt-in model with clear data usage explanation)
- GDPR-compliant anonymization (remove PHI, use cryptographic hashing)
- Data governance committee with patient advocates

**Quality Control:**
- Inter-observer agreement studies (Kappa >0.75 for inclusion)
- Regular calibration workshops across spoke pathologists
- Audit trails for all data modifications

---

#### **Phase 3: Biobank Infrastructure Development** *(Months 6-24)*

**Data Acquisition Pipeline:**

1. **At Spoke Sites:**
   - Routine clinical imaging captured post-diagnosis
   - Local anonymization using automated tools
   - Initial quality check (focus, staining quality)
   - Encrypted upload to regional data nodes

2. **At Hub Sites:**
   - Centralized quality assessment (AI-based artifact detection)
   - Expert pathologist annotation (2-3 independent annotators)
   - Metadata enrichment (link to clinical outcomes where consented)
   - Curation into training/validation/test sets (70/15/15 split)

**Storage & Compute Architecture:**
- **Primary Storage:** Distributed across hubs (reduce single point of failure)
- **Backup:** Cloud-based encrypted backup (compliance with MeitY guidelines)
- **Compute:** GPU clusters at hubs (NVIDIA A100/H100 equivalent)
- **Access Control:** Role-based access, audit logs, data use agreements

**Technical Stack:**
- Database: PostgreSQL for metadata, distributed file systems (Ceph/GlusterFS) for images
- Data Pipeline: Apache Airflow for orchestration
- Version Control: DVC (Data Version Control) for dataset tracking

---

#### **Phase 4: AI Model Development** *(Months 12-48)*

**Model Development Strategy:**

**For Onco-pathology:**
- **Task 1:** Cancer detection (binary: cancerous vs. benign)
- **Task 2:** Cancer subtyping (adenocarcinoma, squamous cell, etc.)
- **Task 3:** Grading (Gleason score for prostate, TNM staging)
- **Task 4:** Biomarker prediction (HER2, ER/PR status from H&E)

**For Infectious Diseases:**
- **Task 1:** TB granuloma detection
- **Task 2:** Viral vs. bacterial pneumonia differentiation
- **Task 3:** Fungal infection identification
- **Task 4:** COVID-19 sequelae characterization

**Model Architecture Approach:**
- **Base Models:** Transfer learning from foundation models (DINO, ConvNext, Vision Transformers)
- **Fine-tuning:** On India-specific dataset
- **Multi-task Learning:** Share representations across related tasks
- **Federated Learning:** Train on distributed data without centralization (using PySyft/Flower frameworks)

**Validation Strategy:**
- **Internal Validation:** On held-out test set from biobank
- **External Validation:** Prospective validation at 5 non-contributing spoke sites
- **Comparison:** Against expert pathologist consensus (3 experts, majority vote)
- **Metrics:** Accuracy, sensitivity, specificity, AUC-ROC, F1-score, confusion matrices

**Interpretability:**
- Grad-CAM visualization for model attention
- Pathologist review of AI flagged regions
- Integration of feedback into model refinement

---

#### **Phase 5: Clinical Deployment & Integration** *(Months 30-60)*

**Deployment Model:**
- **Cloud-based API:** For lightweight inference at spoke sites
- **Edge Deployment:** Containerized models (Docker) for institutions with connectivity issues
- **Integration:** RESTful APIs compatible with PACS, LIS systems

**User Interface:**
- Web-based dashboard for pathologists
- Side-by-side comparison: Original image + AI annotations
- Confidence scores for predictions
- Option to accept/reject/modify AI suggestions

**Monitoring & Continuous Learning:**
- Track model performance in real-world settings
- Collect edge cases for model retraining
- Quarterly model updates based on new data
- A/B testing for model improvements

---

#### **Phase 6: Capacity Building & Dissemination** *(Continuous)*

**Training Programs:**
- **Level 1:** Digital pathology basics (100 participants)
- **Level 2:** AI-assisted diagnostics interpretation (50 participants)
- **Level 3:** Advanced AI model development (20 participants)

**Knowledge Transfer:**
- Annual symposium on AI in diagnostics
- Open-access publication of anonymized datasets (after project completion)
- Collaboration with ICMR for guideline development

---

### Risk Mitigation

| **Risk** | **Mitigation Strategy** |
|----------|------------------------|
| Low spoke participation | Incentivize through co-authorship, infrastructure support, free training |
| Data quality issues | Implement automated QC, regular audits, rejection criteria |
| Ethical concerns | Transparent consent process, patient advocate on steering committee |
| Model bias | Stratified sampling by demographics, fairness metrics (demographic parity) |
| Regulatory delays | Early engagement with CDSCO, plan for SaMD (Software as Medical Device) pathway |
| Technical failures | Redundant systems, robust backup, incremental deployment |

---

**Does this framework resonate with your vision?** We can drill deeper into any specific area - perhaps the federated learning implementation, the clinical validation protocol, or the data governance model. What aspect would strengthen your proposal most?`;
  }

  if (lastMessage.includes('budget') || lastMessage.includes('funding') || lastMessage.includes('cost')) {
    return `Let's talk money! DBT appreciates detailed, justified budgets that show you've thought through every aspect. Here's a realistic breakdown for a 5-year project of this scale:

### Indicative Budget Breakdown

**Total Project Cost: ₹45-50 Crores (≈$5.5-6 million USD)**

---

#### **1. Infrastructure & Equipment** *(₹15 Crores | 30%)*

**Hub Infrastructure (5 hubs):**
- **High-Performance Computing:** ₹4 Cr
  - GPU servers (5 x NVIDIA A100/H100 clusters): ₹3 Cr
  - High-capacity storage (5 PB distributed): ₹80 L
  - Networking equipment: ₹20 L

- **Digital Pathology Infrastructure:** ₹6 Cr
  - Whole slide scanners for hubs (5 x ₹80L): ₹4 Cr
  - Microscopy workstations: ₹50 L
  - PACS integration hardware: ₹1.5 Cr

**Spoke Infrastructure (30 spokes):**
- **Basic Digitization:** ₹4.5 Cr
  - Mid-tier slide scanners (30 x ₹15L): ₹4.5 Cr
  - Each spoke gets ONE scanner + IT support

**Cloud & Backup Infrastructure:** ₹50 L
- Cloud storage (5 years subscription): ₹30 L
- Disaster recovery systems: ₹20 L

---

#### **2. Human Resources** *(₹18 Crores | 36%)*

**Hub Teams (5 hubs x 5 years):**
- **Principal Investigators** (5 x ₹25L/year x 5): ₹6.25 Cr *(Usually institutional contribution, may reduce ask)*
- **AI/ML Scientists** (10 x ₹18L/year x 5): ₹9 Cr
- **Biomedical Engineers** (5 x ₹12L/year x 5): ₹3 Cr
- **Data Scientists** (5 x ₹15L/year x 5): ₹3.75 Cr
- **Project Managers** (3 x ₹10L/year x 5): ₹1.5 Cr

**Spoke Support:**
- **Pathology Coordinators** (30 x ₹6L/year x 5): ₹9 Cr *(Part-time positions)*
- **IT Support Staff** (10 x ₹8L/year x 5): ₹4 Cr

**Administrative Support:**
- **Project Coordinator** (1 x ₹12L/year x 5): ₹60 L
- **Data Manager** (1 x ₹10L/year x 5): ₹50 L

*Subtotal: ₹37.6 Cr (Will need to optimize - possibly 50% institutional contribution)*

**Realistic DBT Ask for Personnel: ₹18 Cr** *(with institutional cost-sharing)*

---

#### **3. Consumables & Operations** *(₹6 Crores | 12%)*

**Annual Operations (₹1.2 Cr/year x 5 years):**
- **Data Acquisition Costs:** ₹2.5 Cr
  - Spoke site data contribution incentives: ₹50L/year
  - Patient consent management: ₹15L/year
  - Quality control audits: ₹35L/year

- **Computing Costs:** ₹1.5 Cr
  - Cloud computing (AWS/Azure GPU instances): ₹60L/year
  - Software licenses (annotation tools, analytics): ₹30L/year
  - Electricity & maintenance: ₹30L/year

- **Lab Supplies:** ₹1.5 Cr
  - Slide preparation reagents: ₹40L/year
  - Digital storage media: ₹20L/year
  - Quality control materials: ₹10L/year

- **Travel & Meetings:** ₹50 L
  - Network coordination meetings (quarterly): ₹20L/year
  - Training workshops: ₹30L/year

---

#### **4. Training & Capacity Building** *(₹2.5 Crores | 5%)*

- **Training Programs:** ₹1.5 Cr
  - Digital pathology workshops (10 workshops): ₹50 L
  - AI literacy programs for clinicians: ₹40 L
  - Advanced model development courses: ₹30 L
  - Certification program development: ₹30 L

- **International Collaborations:** ₹1 Cr
  - Expert consultations: ₹40 L
  - Technology transfer: ₹40 L
  - Conference participation: ₹20 L

---

#### **5. Dissemination & Publications** *(₹1.5 Crores | 3%)*

- **Publications:** ₹50 L (open access fees for 20+ papers)
- **Workshops/Symposia:** ₹60 L (annual national symposium)
- **Policy Briefs & Guidelines:** ₹20 L
- **Website & Outreach:** ₹20 L

---

#### **6. Contingency & Miscellaneous** *(₹2 Crores | 4%)*

- **Equipment maintenance:** ₹80 L
- **Unforeseen technical challenges:** ₹60 L
- **Regulatory compliance (CDSCO submissions):** ₹40 L
- **Buffer:** ₹20 L

---

### **Budget Justification Strategy**

**Co-Funding Model (Strengthen Your Proposal):**
- **DBT Contribution:** ₹35 Crores (70%)
- **Institutional Contribution:** ₹10 Crores (20%) - faculty time, existing infrastructure
- **Industry Partnership:** ₹5 Crores (10%) - equipment sponsors, cloud credits

**DBT Priorities to Highlight:**
✓ **Infrastructure sharing:** Equipment benefits multiple institutions
✓ **Capacity building:** Training 200+ healthcare professionals
✓ **Public health impact:** Addresses cancer & infectious disease burden
✓ **Make in India:** Develop indigenous AI diagnostic capabilities
✓ **Sustainability:** Network generates publishable research + commercial potential

**Cost Optimization Tips:**
1. **Negotiate cloud credits:** AWS/Azure/GCP often provide research grants (₹50L-1Cr saved)
2. **Leverage existing infrastructure:** If your institution has GPU clusters, reduce capex ask
3. **Staggered deployment:** Don't equip all 30 spokes in Year 1 - phase over 3 years
4. **Open-source tools:** Use PyTorch, TensorFlow (free) vs. proprietary platforms

---

### **Budget Presentation Tips**

**Tables Work Best:**
Create year-wise breakdowns showing progressive scale-up. Example:

| **Category** | **Year 1** | **Year 2** | **Year 3** | **Year 4** | **Year 5** | **Total** |
|--------------|-----------|-----------|-----------|-----------|-----------|----------|
| Equipment    | ₹8 Cr     | ₹4 Cr     | ₹2 Cr     | ₹1 Cr     | -         | ₹15 Cr   |
| Personnel    | ₹2 Cr     | ₹3.5 Cr   | ₹4 Cr     | ₹4.5 Cr   | ₹4 Cr     | ₹18 Cr   |
| Operations   | ₹80 L     | ₹1.2 Cr   | ₹1.3 Cr   | ₹1.4 Cr   | ₹1.3 Cr   | ₹6 Cr    |
| ...          | ...       | ...       | ...       | ...       | ...       | ...      |

**Narrative Justification:**
For each major line item, add 2-3 sentences explaining necessity. Example:
> "High-performance GPU infrastructure is essential for training deep learning models on gigapixel histopathology images, which require 100-200 hours of compute per model iteration. The proposed NVIDIA A100 clusters represent the minimum viable configuration for our workload, validated by our preliminary studies."

---

**Would you like me to help you create detailed cost justifications for specific items, or should we discuss how to present the economic impact and return on investment to strengthen your case?**`;
  }

  if (lastMessage.includes('impact') || lastMessage.includes('significance') || lastMessage.includes('societal')) {
    return `Impact is where you inspire the reviewers! Let's frame the transformative potential of your work in ways that resonate with DBT's mission and India's healthcare priorities.

### Multi-Dimensional Impact Framework

---

#### **1. Healthcare Delivery Impact** *(The Human Story)*

**Current Reality:**
A patient in a district hospital in rural Odisha gets a breast biopsy. The slide is sent to a pathology lab 200 km away. Diagnosis takes 10-14 days. By then, if it's aggressive cancer, valuable treatment time is lost. Misdiagnosis rates in resource-constrained settings can exceed 20%.

**Your Project's Transformation:**
With your hub-and-spoke AI network, that same slide gets digitally scanned locally, analyzed by AI within 2 hours, and reviewed by a hub pathologist remotely within 24 hours. Diagnosis time: **90% reduction**. Accuracy: **Expert-level consistency**.

**Quantifiable Health Outcomes:**
- **Early Detection:** 30-40% increase in early-stage cancer diagnoses (Stage I/II vs. III/IV)
- **Survival Impact:** Early detection improves 5-year survival rates by 20-30 percentage points for most cancers
- **Lives Saved:** Conservatively, 5,000-10,000 additional lives saved annually once at scale
- **Infectious Disease Control:** Faster TB diagnosis reduces transmission period (3-4 weeks to 48 hours)

**Equity Dimension:**
- Bridge urban-rural diagnostic divide
- Empower district hospitals to retain complex cases
- Reduce financial burden of diagnostic migration (families spending ₹20,000-50,000 traveling to metros)

---

#### **2. Scientific & Research Impact**

**Knowledge Creation:**

**India-Specific Disease Insights:**
- First comprehensive biobank capturing India's unique disease epidemiology
- Population-specific cancer subtypes (e.g., Indian women have different breast cancer molecular profiles than Western cohorts)
- Infectious disease co-morbidities (TB-diabetes, TB-HIV, post-COVID sequelae)

**AI Methodology Advancement:**
- Novel federated learning approaches for medical imaging in low-bandwidth settings
- Techniques for handling data heterogeneity across institutions
- Interpretable AI models that enhance clinician trust

**Publications & Citations:**
- Expected: 25-30 high-impact papers (Nature Medicine, Lancet Digital Health, JAMA Oncology)
- Open datasets enabling 100+ downstream research projects globally
- New benchmarks for medical AI evaluation

**Training Next-Gen Researchers:**
- 50+ PhD students supported through biobank access
- Cross-disciplinary research at AI-medicine intersection
- Strengthen India's position in global medical AI research

---

#### **3. Economic Impact**

**Healthcare Cost Savings:**

**Direct Savings:**
- **Reduced diagnostic errors:** ₹200-500 Cr annually (avoided wrong treatments, repeat tests)
- **Early detection:** ₹1,000+ Cr saved in avoided late-stage cancer treatments
- **Decentralization:** ₹300 Cr saved in patient travel and accommodation costs

**Indirect Economic Benefits:**
- Reduced patient disability-adjusted life years (DALYs): 50,000-100,000 DALYs saved/year
- Productivity gains: Earlier return to workforce
- Avoided catastrophic health expenditures for families

**Healthcare System Efficiency:**
- 40% reduction in pathology turnaround time → faster treatment initiation
- 30% reduction in specialist pathologist workload → redeploy to complex cases
- Optimize resource allocation in district hospitals

**Industry Development:**

**MedTech Ecosystem:**
- Create market for India-made AI diagnostic solutions (import substitution)
- Attract investment in healthcare AI startups (projected ₹5,000 Cr sector by 2030)
- Export potential: Adapt models for other LMICs (Southeast Asia, Africa)

**Job Creation:**
- Direct: 500+ AI scientists, biomedical engineers, data specialists
- Indirect: 2,000+ allied health professionals skilled in digital pathology
- Entrepreneurship: Spin-off companies developing specialized diagnostic tools

---

#### **4. Strategic & Policy Impact**

**Alignment with National Priorities:**

**Ayushman Bharat Digital Mission (ABDM):**
- Your biobank becomes a flagship ABDM use case
- Demonstrate interoperability of health records and AI diagnostics
- Inform standards for digital health data exchange

**National Cancer Grid (NCG):**
- Complement NCG's treatment protocols with AI diagnostic layer
- Extend NCG reach to non-metro centers through telemedicine + AI

**National Health Policy 2017 Goals:**
- Address healthcare workforce shortages (AI augments limited specialists)
- Strengthen preventive and promotive healthcare (early detection)
- Reduce out-of-pocket expenditures

**Atmanirbhar Bharat (Self-Reliant India):**
- Reduce dependence on foreign AI diagnostic platforms (currently 80%+ market share held by international companies)
- Build sovereign capability in healthcare AI
- Create IP that India owns and can license globally

**Global Health Diplomacy:**
- Position India as leader in affordable, scalable medical AI for LMICs
- Contribute to WHO guidelines on AI in healthcare
- South-South cooperation opportunities (share models with African nations)

---

#### **5. Technological & Innovation Impact**

**Infrastructure Legacy:**

**Digital Health Infrastructure:**
- 30+ institutions with modern digital pathology capabilities (up from current ~10)
- Trained workforce maintaining this infrastructure beyond project lifespan
- Replicable template for other disease verticals (cardiology, neurology, dermatology)

**Open Innovation Platform:**
- Release anonymized datasets as "India Imaging Commons" (like NIH's Imaging Data Commons)
- Enable 1,000+ global researchers to build on your foundation
- Accelerate medical AI research through shared resources

**Technology Transfer:**
- Models deployable in low-resource settings (edge computing, mobile platforms)
- Adaptation for point-of-care diagnostics (smartphone-based pathology)
- Integration with emerging technologies (whole-slide imaging via smartphone microscopy adapters)

---

#### **6. Social & Ethical Impact**

**Trust in AI Healthcare:**
- Demonstrate transparent, clinician-in-the-loop AI (not black-box automation)
- Establish ethical frameworks for medical AI adopted nationwide
- Patient engagement in data donation for public good

**Health Literacy:**
- Educate public about digital health and AI benefits
- Address misinformation about medical AI
- Build community support for biobanking initiatives

**Gender & Inclusivity:**
- Ensure biobank represents India's diversity (gender, caste, geography, ethnicity)
- Address historical underrepresentation in medical datasets
- Women-focused cancers (breast, cervical) get priority attention

---

### **Impact Narrative for Your Proposal**

**Opening Paragraph Example:**

"This project will catalyze a paradigm shift in India's approach to diagnostics for high-burden diseases. By establishing the nation's first AI-enabled imaging biobank with federated architecture, we will democratize access to expert-level pathology interpretation for 500 million Indians currently underserved by the healthcare system. The immediate impact—saving an estimated 10,000 lives annually through earlier cancer detection and faster infectious disease diagnosis—will be matched by long-term strategic gains: positioning India as a global leader in medical AI, creating a ₹5,000 crore domestic healthtech industry, and building sustainable diagnostic infrastructure in 30 tier-2 and tier-3 institutions. This is not merely a research project; it is a foundation for India's next generation of healthcare delivery."

---

### **Metrics Dashboard for Impact Tracking**

| **Impact Domain** | **Baseline** | **Year 3 Target** | **Year 5 Target** | **Measurement Method** |
|-------------------|-------------|------------------|------------------|----------------------|
| Diagnostic Turnaround | 10 days | 3 days | 1 day | Hospital records audit |
| Early-Stage Detection Rate | 35% | 50% | 60% | Cancer registry analysis |
| Spoke Institution Capacity | 0 AI tools | 15 sites | 30 sites | Deployment tracking |
| Lives Impacted | 0 | 50,000 patients | 200,000 patients | Patient records |
| Publications | 0 | 10 papers | 25 papers | Bibliometrics |
| Economic Savings | 0 | ₹300 Cr | ₹1,000 Cr | Health economics study |

---

**Key Messaging:**
1. **Immediate:** Saves lives today through better diagnostics
2. **Scalable:** Model replicable across disease areas and geographies
3. **Sustainable:** Builds lasting infrastructure and workforce
4. **Strategic:** Advances India's health sovereignty and global leadership

**Would you like me to help you craft compelling case studies, develop the long-term sustainability plan, or work on the dissemination strategy to maximize impact visibility?**`;
  }

  if (lastMessage.includes('collaboration') || lastMessage.includes('partner') || lastMessage.includes('hub') || lastMessage.includes('spoke')) {
    return `The collaboration framework is critical - DBT wants to see strong institutional commitment and a clear governance model. Let's design a network that's both cohesive and respectful of institutional autonomy.

### Hub-and-Spoke Collaboration Architecture

---

#### **1. Network Topology & Selection Strategy**

**Hub Institutions (5 Premier Centers)**

**Selection Criteria:**
- Annual pathology volume >25,000 cases
- Existing AI/ML research capability (publications, faculty expertise)
- Strong clinical research infrastructure (clinical trials unit, bioethics committee)
- Geographic distribution covering diverse populations
- Willingness to commit institutional resources

**Proposed Hub Configuration:**

| **Hub** | **Institution** | **Specialization** | **Geographic Coverage** | **Unique Strength** |
|---------|----------------|-------------------|------------------------|---------------------|
| **Hub 1** | Tata Memorial Centre, Mumbai | Breast & GI Onco-pathology | Western India | India's largest cancer center, ICMR oncology lead |
| **Hub 2** | AIIMS Delhi | Multi-modal Radiology AI | Northern India | Premier medical institution, government backing |
| **Hub 3** | CMC Vellore | Infectious Disease Pathology | Southern India | TB research excellence, WHO collaboration center |
| **Hub 4** | PGIMER Chandigarh | Federated Learning Coordination | North-West India | Strong IT infrastructure, multi-state reach |
| **Hub 5** | NIMHANS Bangalore / SCB Medical College Cuttack | Neuro-onco-pathology / Eastern regional diseases | South/East India | Research focus, underserved region coverage |

**Hub Responsibilities:**
- AI model development and validation
- Quality assurance for spoke data
- Training and mentorship for spoke teams
- Expert pathologist review for complex cases
- Infrastructure hosting (compute, storage)

---

**Spoke Institutions (30 District-Level Centers)**

**Selection Criteria:**
- Government medical colleges or district hospitals with teaching function
- Minimum 5,000 pathology cases/year
- Basic digital infrastructure (internet, computers)
- Willingness to digitize workflow
- Representation from underserved regions

**Strategic Distribution:**
- **6 per hub coverage area** (5 hubs × 6 spokes = 30)
- Mix of medical colleges (60%) and district hospitals (40%)
- Priority to aspirational districts (NITI Aayog initiative)
- Include North-East states (often excluded from national studies)

**Spoke Responsibilities:**
- Clinical data contribution (imaging + metadata)
- Local quality control and anonymization
- AI tool deployment and feedback
- Patient enrollment and consent management
- Participation in training programs

**Sample Spoke Distribution:**

**Hub 1 (TMC Mumbai) Spokes:**
- Government Medical College, Aurangabad (Maharashtra)
- BJ Medical College, Pune (Maharashtra)
- Government Medical College, Nagpur (Maharashtra)
- District Hospital, Nanded (Maharashtra)
- Government Medical College, Surat (Gujarat)
- Civil Hospital, Rajkot (Gujarat)

*(Repeat similar logic for other 4 hubs)*

---

#### **2. Governance & Decision-Making Structure**

**Three-Tier Governance:**

**Tier 1: Steering Committee** *(Strategic Oversight)*
- **Composition:**
  - Principal Investigators from 5 hubs
  - 2 spoke representatives (elected annually)
  - DBT nominee
  - ICMR representative
  - External expert (international medical AI)
  - Patient advocate / bioethics expert

- **Responsibilities:**
  - Annual strategic planning
  - Budget allocation approvals
  - Conflict resolution
  - Publication and IP policies
  - Performance review

- **Meeting Frequency:** Quarterly (virtual) + Annual retreat

**Tier 2: Technical Advisory Board** *(Operational Guidance)*
- **Composition:**
  - AI/ML leads from each hub
  - Data manager representatives
  - Pathology lead from each hub
  - IT infrastructure specialist

- **Responsibilities:**
  - Technical protocol standardization
  - Model development prioritization
  - Data quality monitoring
  - Tool deployment coordination
  - Research agenda setting

- **Meeting Frequency:** Monthly virtual meetings

**Tier 3: Working Groups** *(Execution)*

**Five domain-specific working groups:**

1. **Data Acquisition & Quality WG**
   - Standardize imaging protocols
   - Develop annotation guidelines
   - Quality control procedures
   - Handle data disputes

2. **AI Development WG**
   - Model architecture decisions
   - Training/validation splits
   - Performance metrics
   - Interpretability standards

3. **Clinical Integration WG**
   - User interface design
   - Workflow integration strategies
   - Clinician feedback loops
   - Safety monitoring protocols

4. **Ethics & Governance WG**
   - Consent processes
   - Privacy protection measures
   - Fairness audits (demographic bias)
   - Benefit-sharing frameworks

5. **Capacity Building & Dissemination WG**
   - Training curriculum development
   - Workshop organization
   - Publication strategy
   - Knowledge transfer planning

---

#### **3. Collaboration Mechanisms**

**Formal Agreements:**

**Memorandum of Understanding (MOU):**
- Each institution signs MOU with lead hub (AIIMS / TMC as overall coordinator)
- Defines roles, responsibilities, data ownership, IP rights
- Specifies institutional commitments (infrastructure, personnel time)
- 5-year term with annual performance reviews

**Data Use Agreements (DUA):**
- Governs access to biobank data
- Specifies permitted research uses
- Includes publications rights and authorship guidelines
- Protects patient privacy and institutional interests

**Intellectual Property Framework:**
- **Data contributions:** Institutions retain ownership of contributed data but grant perpetual license for project use
- **AI models:** Joint IP shared across all partners (distribution based on contribution)
- **Commercial applications:** Revenue-sharing model (70% reinvested in network, 30% to contributing institutions)

---

**Incentive Structures:**

**For Hub Institutions:**
- Leadership recognition in national/international forums
- Preferential access to trained AI workforce
- First-author publications opportunities
- Infrastructure grants for compute/storage

**For Spoke Institutions:**
- Free AI diagnostic tools (₹20-50L value per institution)
- Training for 5-10 staff members (₹5L value)
- Co-authorship on multi-center publications
- Capacity building in digital pathology
- Improved diagnostic reputation → patient retention

**For Individual Contributors:**
- Pathologists: Recognition through author citations, certification in AI-pathology
- IT staff: Skills development in cutting-edge technologies
- Clinicians: CME credits, improved patient outcomes for career advancement

---

#### **4. Communication & Coordination**

**Digital Platforms:**

**1. Collaboration Portal:**
- Secure web platform for network management
- Task tracking (data uploads, annotations, validations)
- Document repository (SOPs, protocols, templates)
- Discussion forums for problem-solving

**2. Data Sharing Platform:**
- Federated access to biobank
- Role-based permissions (annotator, researcher, auditor)
- Audit logs for compliance
- API for programmatic access

**3. Training Management System:**
- Online learning modules (e.g., Moodle)
- Webinar hosting
- Certification tracking
- Resource library (tutorials, case studies)

**Regular Touchpoints:**
- **Weekly:** Hub coordinator check-ins (15 min)
- **Monthly:** Technical Advisory Board meetings (2 hours)
- **Quarterly:** Steering Committee meetings (half-day)
- **Semi-Annual:** Working group workshops (2-day, rotating host)
- **Annual:** National symposium (3-day, all partners, + external participants)

---

#### **5. Conflict Resolution & Quality Assurance**

**Anticipated Challenges & Solutions:**

| **Challenge** | **Mitigation Strategy** |
|--------------|------------------------|
| **Spoke data contribution lags** | Performance dashboards, recognition awards, dedicated support staff |
| **Inter-institutional competition** | Clear publication policies (lead authorship rotates, contribution-based), celebrate collective wins |
| **Technical capacity gaps** | Hub-spoke mentorship pairings, on-site training visits, 24/7 helpdesk |
| **Ethical concerns at spoke sites** | Ethics WG provides template consent forms, IRB support, regular compliance audits |
| **Infrastructure failures** | Redundant systems, rapid response team, equipment insurance, backup hubs |
| **Intellectual property disputes** | Pre-agreed IP framework in MOU, arbitration clause, external mediation panel |

**Quality Assurance Mechanisms:**
- **Data Quality Audits:** Random 10% sample reviewed quarterly by hub pathologists
- **Model Performance Monitoring:** Real-time dashboards tracking accuracy at each spoke
- **User Satisfaction Surveys:** Quarterly feedback from spoke clinicians
- **External Evaluation:** Independent mid-term and end-term evaluations by DBT-appointed panel

---

#### **6. Sustainability & Long-Term Vision**

**Transition Plan (Years 4-5):**

**Financial Sustainability:**
- Develop fee-for-service model for non-partner institutions (₹100-500 per AI analysis)
- License models to diagnostic companies (Pathology labs, hospital chains)
- Ongoing government support through ICMR/DBT operational grants

**Institutional Ownership:**
- Transfer governance to Indian Council of Medical Research (ICMR) as permanent host
- Establish "National AI Diagnostics Network" as independent entity
- Spoke institutions become self-sufficient in AI tool maintenance

**Expansion Roadmap:**
- **Year 6-8:** Double spoke network to 60 institutions
- **Year 8-10:** Extend to other disease areas (cardiology, nephrology, neurology)
- **Year 10+:** International partnerships (ASEAN, Africa) for model adaptation

---

### **Collaboration Benefits Summary Table**

| **Stakeholder** | **What They Contribute** | **What They Gain** |
|----------------|-------------------------|-------------------|
| **Hub Institutions** | AI expertise, infrastructure, quality oversight | Research leadership, publications, trained workforce |
| **Spoke Institutions** | Clinical data, patient access, ground-level insights | Free AI tools, capacity building, improved diagnostics |
| **Patients** | Consent for data use | Better, faster diagnostics; contribution to public health |
| **DBT/Government** | Funding, policy support | National diagnostic capacity, health equity, global prestige |
| **Industry Partners** | Equipment, cloud credits, commercialization expertise | Access to validated models, market for products |

---

**Does this collaboration framework align with your vision? We can refine the institutional selection, develop detailed templates for MOUs and DUAs, or create a communication plan for stakeholder engagement. What aspect needs the most attention for your proposal?**`;
  }

  // Default comprehensive response for general queries
  return `Hello! I'm Dr. Anika Sharma, and I'm thrilled to work with you on this important DBT proposal.

Your project - establishing a National Network for AI-Enabled Imaging Biobank focused on onco-pathology and infectious diseases using a hub-and-spoke model - has tremendous potential to transform diagnostic healthcare in India.

Before we dive deep into any particular section, let me understand where you are in the proposal process:

**Key Questions to Shape Our Collaboration:**

1. **Current Stage:** Are you at the conceptualization phase, or do you have a draft outline already?

2. **Specific Focus:** Which aspects need the most immediate attention?
   - Project overview and rationale?
   - Methodology and technical approach?
   - Budget justification?
   - Impact assessment and outcomes?
   - Institutional partnerships?

3. **Institutional Context:**
   - Which institution are you affiliated with?
   - Do you have preliminary hub/spoke partners identified?
   - Any existing infrastructure you can leverage?

4. **Unique Angles:** What makes your approach distinctive? Are you emphasizing:
   - Specific cancer types or infectious diseases?
   - Novel AI methodologies (federated learning, interpretable AI)?
   - Particular underserved regions?
   - Integration with existing initiatives (NCG, ABDM)?

**What I Bring to the Table:**

✓ **Original Content Generation:** Every section I help you draft will be 100% plagiarism-free, written from first principles
✓ **Human, Professional Tone:** No generic academic jargon - compelling narratives that reviewers remember
✓ **India-Specific Expertise:** Deep understanding of DBT priorities, Indian healthcare context, and regional challenges
✓ **Technical Rigor:** Credible methodologies that demonstrate feasibility
✓ **Strategic Thinking:** Positioning your proposal to stand out among competitive applications

**Quick Wins I Can Provide Right Now:**

📋 **Project titles** that are impactful yet precise
🎯 **Objective frameworks** that are measurable and ambitious
🔬 **Methodology blueprints** showing you've thought through every detail
💰 **Budget strategies** that justify every rupee
📊 **Impact narratives** that inspire reviewers
🤝 **Collaboration models** that demonstrate strong institutional commitment

**How to Use Me Most Effectively:**

- Ask specific questions about proposal sections
- Share draft content for refinement and strengthening
- Request frameworks, templates, or examples
- Bounce ideas off me to stress-test logic
- Get alternative perspectives on technical approaches

**Ready to Begin?**

You can either:
1. **Use the suggestion cards above** to jump into specific sections, or
2. **Tell me where you're stuck** or what's most urgent, or
3. **Share what you've drafted** so far and I'll provide constructive feedback

I'm here to be your thinking partner, not just a writing tool. Let's build a proposal that gets funded and, more importantly, changes lives.

What would you like to tackle first?`;
}
