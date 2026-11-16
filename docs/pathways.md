# Skills & portfolio projects

The projects below are suggestions for demonstrating skills, not employer requirements or promises of employment. Use the actual posting requirements to choose your next step.

| Interest | Foundation | Portfolio evidence |
| --- | --- | --- |
| FDE / applied AI | Programming, APIs, SQL, clear communication | A small workflow integration with a user guide, evaluation set, and deployment notes. |
| AI security | Networking, identity, threat modeling, Python | A controlled test application with a threat model and documented defenses. |
| Infrastructure / MLOps | Linux, containers, monitoring, automation | A reproducible model-serving pipeline with latency and failure monitoring. |
| Evaluation / data science | Statistics, Python, experiment design | Compare a baseline and model on held-out data; explain error categories. |
| Operations / governance | Process design, documentation, data quality | A model inventory, review checklist, risk register, and quality dashboard. |

## FDE, applied AI & IT automation {#delivery}

Practice programming, APIs, SQL, and explaining a workflow to a user. A small integration demonstrates skills shared by customer-facing FDE work and internal IT automation.

### Beginner project: FAQ helper

**Prerequisites and suggested tools:** Basic Python functions and lists; suggested tools: Python, CSV, and a command-line menu. No paid model API is needed.

**Small scope:** Create ten synthetic campus FAQs and a keyword-based helper that returns an answer or says it cannot answer.

**Deliverables:** Code, a ten-row FAQ dataset, README setup steps, a fixed 20-question test set, results, and two documented failure cases.

**Completion checklist:**

- [ ] Run the helper from a clean setup using the README.
- [ ] Test ten covered questions, five paraphrases, and five out-of-scope questions.
- [ ] Record the expected and actual answer for all 20 tests; unknown questions must have a fallback.

**Optional extension:** Add embedding retrieval or a model, then compare it against the same baseline and test set.

[Return to the career map: FDE, applied AI, and IT automation](./careers.md#emerging-ai-career-map)

## AI security {#security}

Practice identity, threat modeling, Python, and security testing in an application you own.

### Beginner project: Permission-aware assistant simulator

**Prerequisites and suggested tools:** Basic Python conditionals and testing; suggested tools: Python and unittest. Use only synthetic records in a local app you own.

**Small scope:** Simulate a tool-using assistant with a read-only FAQ tool and a restricted administrator tool. Enforce access in code rather than relying on instructions to a model.

**Deliverables:** Code, a short threat model, synthetic user roles, test results, README, and a limitations note explaining that a simulator does not prove a real model is secure.

**Completion checklist:**

- [ ] Define which actions each of two user roles can perform.
- [ ] Run at least eight tests covering allowed access, denied access, missing roles, and requests pretending to be an administrator.
- [ ] Show that every unauthorized request is blocked and document the reason.

**Optional extension:** Add an audit log and test that errors do not reveal restricted data.

[Return to the career map: AI security and red teaming](./careers.md#emerging-ai-career-map)

## Infrastructure & MLOps {#infrastructure}

Practice Linux, repeatable deployment, monitoring, and failure recovery.

### Beginner project: Repeatable prediction service

**Prerequisites and suggested tools:** Basic Python and command-line use; suggested tools: Python, scikit-learn, and optionally Flask. Containers are an extension, not a prerequisite.

**Small scope:** Train a small classifier on a bundled public example dataset and provide a local prediction command. Save the model and measure repeated calls.

**Deliverables:** Training and prediction code, dependency list, dataset attribution, saved-model instructions, timing results, recovery notes, and README.

**Completion checklist:**

- [ ] Train and run predictions using documented commands.
- [ ] Measure at least 20 predictions and report the units and timing method.
- [ ] Test malformed input and a missing model file; provide clear errors and demonstrate recovery by retraining.

**Optional extension:** Wrap the command in a local API or container and add a health check.

[Return to the career map: ML infrastructure and MLOps](./careers.md#emerging-ai-career-map)

## Evaluation & data science {#evaluation}

Practice statistics, Python, experiment design, and error analysis. Model development and evaluation share measurement skills, though evaluation can focus on testing existing models.

### Beginner project: Baseline versus classifier

**Prerequisites and suggested tools:** Basic Python and averages; suggested tools: scikit-learn and a notebook or script.

**Small scope:** Use a bundled labeled dataset, reserve a fixed test split, and compare a simple majority-class baseline with one trained classifier.

**Deliverables:** Reproducible code, split seed, dataset attribution, baseline and model scores, confusion matrix, and a short limitations report.

**Completion checklist:**

- [ ] Keep test rows out of training and tuning.
- [ ] Use the same held-out rows for both approaches and report accuracy plus per-class errors.
- [ ] Inspect at least five errors, or all errors if fewer, and explain whether the improvement is meaningful.

**Optional extension:** Repeat with several seeds and discuss how results vary.

[Return to the career map: ML engineering and AI evaluation](./careers.md#emerging-ai-career-map)

## Operations, governance & product {#operations}

Practice data quality, documentation, process design, and success measures. Operations manages quality, governance tracks risks, and product work connects those measures to user needs; one small review project can introduce all three.

### Beginner project: AI service review pack

**Prerequisites and suggested tools:** Basic tables and clear writing; suggested tools: Markdown and a spreadsheet. Coding is optional.

**Small scope:** Invent a clearly labeled campus FAQ service and review its data quality, ownership, user needs, and risks. Do not claim it was deployed or tested with real users.

**Deliverables:** A one-page product brief, ten synthetic FAQ records, data-quality checklist, model/service inventory, five-item risk register, and go/no-go review.

**Completion checklist:**

- [ ] Assign an owner and mitigation to each of five risks.
- [ ] Review all ten records for completeness, duplicates, and unsupported answers; record findings.
- [ ] Define three measurable acceptance criteria and explain whether the simulated service meets them.

**Optional extension:** Ask a volunteer to try a prototype and record consented feedback separately from simulated findings.

[Return to the career map: data operations, governance, and product](./careers.md#emerging-ai-career-map)

## Compare career stages fairly

**Internship:** Check student enrollment requirements, graduation dates, work authorization conditions, and season. A summer internship is not automatically open to every student.

**Entry-level:** Look for explicit new-graduate or early-career language. “Associate” alone does not establish entry-level; inspect experience requirements.

**Mid-level:** Look for independent delivery expectations, relevant production experience, and scope across a project or service.

**Senior:** Look for architecture, leadership, mentorship, or ownership of difficult systems. A senior title is not an appropriate beginner recommendation simply because it pays well.

## A practical first research sprint

1. Select two career families and compare several local postings.
2. Extract recurring required skills separately from preferred skills.
3. Build one small project that demonstrates two recurring requirements.
4. Publish the code, explain testing and limitations, and document what you learned.
5. Recheck listings before applying and tailor your materials to the actual role.

