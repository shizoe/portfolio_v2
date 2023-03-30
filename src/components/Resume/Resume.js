import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Mabo_Mbebeta_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Summary</h3>
            <Resumecontent
              title="Entry level Data Analyst with 7 years’ experience within the pharmaceutical industry at various levels."
              date=""
              content={[
                "Strong data collection skills, data cleaning and prepping using R, Python and Excel.",
                "Strong understanding in pharmaceutical commodity management.",
                " Endurance to working long hours, often standing up.",
                "Ability to prioritize and handle multiple tasks and heavy workloads.",
                "Skilled in planning, organizing and management of resources.",
                "Exceptional communication skills, with experience in leading small teams and building confidence and engagement.",
                "Able to work well on own initiative, as well as working successfully as part of a team.",
                "Focused on continuous development, both professionally and personally.",
                "Experienced in data visualization using PowerBi, Tableau, Google Sheets and ggplot2",
                "Looking for a new role that can offer a challenging and exciting environment.",
              ]}
            />
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Master of Science (Data Science) [ Symbiosis International (Deemed University) - India ] "
              date="2022 - Present"
              content={[
                "Gain data science knowledge highly relevant in intelligence era.",
                "Provide a comprehensive framework for understanding data science life cycle, statistical foundations, technologies and applications.",
              ]}
            />
            <Resumecontent
              title="Software Engineer (Backend Specialization) [ ALX Africa ] "
              date="2022 - Present"
              content={[
                "C Programming",
                "Graphic Programming",
                "Unix Programming",
                "Data Structure & Algorithms",
                "Reverse Engineering & Security",
                "Python",
                "Front-end dev",
                "Linux/command line",
                "Infrastructure Design & Management",
              ]}
            />
            <Resumecontent
              title="Bachelor of Science (Computer Science)) [ University of the People - U.S.A ] "
              date="2018 - 2020"
              content={[
                `CGPA: 3.63/4`,
                "Understanding of design, development, testing, and documentation of a range of operating systems.",
                "Database management; and programming languages.",
                "Java programming, covering fundamentals such as data types, program control and decisions, loops, string manipulations, procedures, arrays, software testing, and debugging; and advanced concepts such as recursion, linked data structures, and Java’s Collection Framework.",
                "Exploring computer systems, looking at the internal design and functionality of the most basic computer components.",
                "Web programming, including web applications, web services, enterprise web development, markup languages, and server-side programming.",
                "Building mobile applications.",
                "Artificial Intelligence, covering concepts and techniques in AI, including “reasoning”, problem-solving, and search optimization.",
                "Know the basic principles and practical algorithms used for information retrieval and text mining.",
              ]}
            />

            <Resumecontent
              title="Diploma in Pharmacy Technology [ Evelyn Hone College of Applied Arts and Science - Zambia ] "
              date="2018 - 2020"
              content={[
                "Compounding of pharmaceutical products.",
                "Learn about chemical and molecular properties of drugs, their mechanism of action, and adverse effects.",
                "Examine the concept of population health and the pharmacy personnel role.",
                "Develop skills and knowledge for patient-centered clinical case management.",
                "Learn about unit dosing.",
                "Learn about microbiology.",
                "Learn about the best dispensing practices for different types of treatments.",
                "Develop skills in tracking medication errors and proper handling techniques.",
              ]}
            />

            <h3 className="resume-title">Professional Registration</h3>
            <Resumecontent
              title=""
              content={[
                `Registered Pharmacy Technologist - Health Professions Council of Zambia`,
                `Registered ICT Professional - Information and Communication Technology Association Of Zambia`,
              ]}
            />

            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              title="Applied Data Science II: Machine Learning & Statistical Analysis (with honors) [ World Quant University ]"
              date="June 2021"
              content={[]}
            />
            <Resumecontent
              title="Applied Data Science I: Scientific Computing & Python (with honors) [ World Quant University ]"
              date="March 2021"
              content={[]}
            />

            <Resumecontent
              title="Health Information System [ Pacific Open Learning Health Net ]"
              date="May 2019"
              content={[]}
            />
            <Resumecontent
              title="Knowledge Management [ Global Health Programs ]"
              date="January 2019"
              content={[]}
            />
            <Resumecontent
              title="Knowledge Management [ Global Health Programs ]"
              date="January 2019"
              content={[]}
            />
            <Resumecontent
              title="Clinical Mentorship [ USAID | MCSP ]"
              date="February 2018"
              content={[]}
            />
            <Resumecontent
              title="Essential Medicines Supply Chain (Zambia EMPLIP Logistics System) [ USAID Global Health Supply Chain – Procurement & Supply Management (GHSC - PSM) ]"
              date="June 2017"
              content={[]}
            />
            <Resumecontent
              title="Management in Health [ The Open Learning Campus ]"
              date="December 2016"
              content={[]}
            />
            <Resumecontent
              title="ART Commodity Management [ FHI 360 | ZPCT IIB ]"
              date="March 2016"
              content={[]}
            />
            <Resumecontent
              title="PMTCT/OPTION B+ [ Ministry of Health & Chreso Ministries ]"
              date="June 2015"
              content={[]}
            />
            <Resumecontent
              title="National Anti-Retroviral Logistics System [ USAID | DELIVER PROJECT ]"
              date="November 2012"
              content={[]}
            />

            <h3 className="resume-title">Activities</h3>
            <Resumecontent
              content={[
                "Integrating of information technology (Database Systems) in health care to improve patient care and improve evidence-based interventions.",
                "Desktop application development using Java and C#.",
                "Full Stack Web Development (Html, CSS, JavaScript, PHP, Python, React, Vue and C#).",
                "Cross Platform Application Development with Xamarin Forms (Android, IOS and Windows) & React Native.",
                "Machine Learning Application using python and R.",
                "Reading, both scientific journals and logistics management newsletters in connection with my program for pleasure, is my passion.",
                "Follow up on the current medical breakthroughs including the use of nano techs in treating medical conditions and performing surgery in hard-to-reach areas.",
                "Playing Chess and Learning about space explorations and discoveries.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Data Capturer [ Right to Care – USAID Action HIV project ]"
              date="August 2022 – September 2022"
              content={[
                "Responsible for the development of data collection schedule/itineraries.",
                "Responsible for capturing all relevant patient data relating to TB/HIV services from paper files onto the electronic/paper patient register/database daily, including data relating to audits, current visits as well as data relating to past visits (historical data).",
                "Compile statistics relating to daily work performance (‘data entry stats’), to enable line manager to manage the employee’s work performance.",
                "Manage the correction of errors and double-checking of queried data on the relevant electronic/paper patient register / database within stipulated periods of identifying and/or receiving queries.",
                "Ensure that data corrections and/or obtaining of missing data in individual patient files, both electronic and paper files are performed within stipulated time frames.",
                "Capturing and cleaning data in databases for evaluations done by line managers and produce needed datasets.",
                "Helping Ministry of Health staff in compiling reports.",
                "Identifying and consolidating duplicate patient files, both electronic and paper files.",
                "Streamline data collection from supported satellite facilities in the region to support real-time data driven decisions.",
                "Retrieval of patient files and ensuring the quality of collected data, including data entry and management is of high standard.",
                "Performing Transfer of data to servers.",
                "Establish communication channels with research teams about relevant project issues and provide updates.",
                " Ensuring ethical research procedures are adhered to and complied with.",
                "Managing interpersonal relationship with facility staff at research sites and ensure minimal disruption to normal health facility activities.",
                "Attending to ad hoc duties as directed by line manager.",
              ]}
            />
            <Resumecontent
              title="Research Assistant [ John Snow Health Zambia – USAID Zam-Health Project ]"
              date="June 2022 – July 2020"
              content={[
                "Responsible for the development of data collection schedule/itineraries.",
                "Allocate team members tasks and responsibilities each data collection day.",
                "Identify, locate, and select sample members from the population.",
                "Conduct interviews with respondents and record responses using CAPI tools.",
                "Collect all consent forms from team members and ensure that they are accounted for.",
                "Monitor for potential problems and give an account of the effects on data collection.",
                "Compile a report on completed tasks against targets and daily developments and discuss with the team and research coordinator.",
                "Ensure that the team submits the data collected before the next day.",
              ]}
            />
            <Resumecontent
              title="Supply Chain Data Analyst [ Maryland Global Initiatives Corporation – ZAMPHIA Project ]"
              date="June 2021 – March 2022"
              content={[
                "Responsible for coordinating the data collection, cleaning, analysis, and reporting on behalf of the unit.",
                "Facilitate the implementation of the Logistics Management System (LMS), assist with the development of various data products, and support the execution of the supply chain operations.",
                "Support supply chain Data Science and Machine Learning products relating to; Information Management, Quality Management, Performance Management, Human Capital Development and Task Management.",
                "Master data creation, modification and maintenance including but not limited to the update planning parameters in the LMS including data on usages, shelf life, lead-times, re-order quantities, items on order, actual stock figures and inventory targets.",
                "Responsible for adjusting planned stock receipt dates when the projected closing stock is equal to or less than the minimum stock level and generating expedited stock transfer requests.",
                "Periodic reporting including but not limited to inbound receipts, stock status, batch and aging analysis, bin location and pallet utilization analysis reports.",
                "Analyze satellite lab level reports, checking the opening balances, the quantity received in the period and the quantity used in the period.",
                "Cross check that closing stock for previous web matches the opening balance for a subsequent satellite lab in a new web and escalate discrepancies as required.",
                "Match consumption (quantity utilized) to participant numbers on a weekly basis and escalate and investigate discrepancies that fall outside the allowed variance threshold.",
                "Assist with the creation of departmental operational dashboards.",
                "Trend the error reports and ensure that corrective action is taken if the error levels exceed the pre-defined KPI threshold.",
                "Conduct a Pareto (ABC) Analysis and segregate the commodities into categories.",
                "Calculate the degree of inventory accuracy from the variance reports.",
              ]}
            />
            <Resumecontent
              title="Information Assistant [ Ministry of Health – Mwense DHO ]"
              date="May 2020 – May 2021"
              content={[
                "Collect data on the implementation of malaria end user activities.",
                "Aggregate data for HIA1 and HIA2 for the facility, clean it and analyze it for data review meetings.",
                "Entering HIA1 and HIA2 reports in the DHIS2 database on behalf of the health facilities.",
                "Mobile application development and maintenance for data collection for the Malaria Survey in Mambilima catchment area.",
                "Apply both supervised and unsupervised learning methods to develop an algorithm that can help which person next can suffer from Malaria. Perform a t test on the data collected to determine if the variables selected influence malaria disease.",
                "Capture Covid 19 vaccination status in the national database.",
                "Orient facility stuff how to register new clients in the Covid 19 database and append vaccine to their record.",
                "Provide district analysis on the vaccination status based on sex and age groups.",
              ]}
            />
            <Resumecontent
              title="Pharmacy Consultant [ John Snow Inc – USAID Safe Project ]"
              date="July 2019 – March 2020"
              content={[
                "Coordinate and supervise all processes relating inventory control systems.",
                "Conducting a physical stock assessment of ART commodities at the facility to ensure that multi-month dispensation is always conducted.",
                "Communicating with internal stakeholders, such as MCH and laboratory teams, to provide updates on the status of deliveries and to ensure that inventory levels are adequate to meet demand.",
                "Identifying and implementing process improvements to increase efficiency and reduce costs in the supply chain.",
                "Analyzing data and creating reports on key performance indicators, such as delivery times, inventory levels, and supply chain costs.",
                "Assisting with budgeting and forecasting, to ensure that the facility has the resources it needs to operate effectively.",
                "Prepare reports and presentations on multi-month dispensation progress against target.",
                "Ensure that the transition to the TLD regimen is fast-tracked for all stable clients.",
                "Analyze the impart of DSD program by checking against missed appointments and late for pharmacy pickups.",
                "Monitor the effects on Muti Month Scripting on appointment keeping.",
                "Enroll all eligible clients on IPT.",
                "Quantify the required TLD and TLE for 6 MMD.",
                "Offer technical support on eSCMIS and SmartCare usage.",
                "Monitor adverse reaction and report accordingly. Orient staff on the DSD models available at the facility.",
                "Monitor adverse drug reactions, medication error, product quality problems and report accordingly.",
                "Supporting the facility in charge as required, including ensuring pharmaceutical standards are maintained.",
                "Aggregate TLD transition data and Multi Month Dispensation data and develop reports and visualizations monthly.",
                "Report on the status of the 95/95/95 target in relation to IPT enrollment.",
              ]}
            />
            <Resumecontent
              title="Data Entry Clerk [ Mwense District Health Office - RMNCAH&N Project ]"
              date="February 2019 – June 2019"
              content={[
                "Supporting the District Health Information officer in ensuring that all reports from health facilities are delivered on time.",
                "Entering of monthly HIA 1 and HIA 2 reports for facilities in the DHIS2 database.",
                "Assist the district health information officer develop presentation from the captured data using indicator tracking and searching.",
                "Verifying the reported data with program officers before entering the database in an advert that an outlier is spotted to ensure that only accurate, correct, and consistent data is entered.",
                "Help Stage 2 RHC with data analysis and presentations for the monthly data review meetings. Ensure that the data presented is easy to understand by all departments to foster intervention development.",
                "Collecting, cleaning, and organizing large sets of data from various health sources for provincial meetings.",
                "Using statistical and analytical methods to identify patterns and trends in data to help environmental specialists streamline community activities.",
                "Developing and maintaining databases and data systems to ensure the accuracy and integrity of data being shared among various stakeholders in the district.",
              ]}
            />
            <Resumecontent
              title="Pharmacy Technologist [ Ministry of Health – Mwense ]"
              date="November 2015 – January 2019"
              content={[
                "On-site inspections, audits, and reviews of implementation of result based financing in health facilities on behalf of world bank to ensure partners(MoH) are operating in an ethical and compliant manner, and to identify and address any issues or risks that may arise.",
                "Monitor the utilization of essential drugs and pharmaceuticals using implementation research to identify gaps and develop interventions.",
                "Develop data collecting tools for key indicator products.",
                "Conduct dispensing of both essential medicines and antiretroviral drugs to clients and offer medication counseling to clients to ensure correct taking of the medications and prevent adverse reactions.",
                "Train staff in inventory control systems.",
                "Dispensing ARV’s to clients using eLMIS facility edition and SmartCare to produce accurate data and provide updates on the latest pharmaceutical practices.",
                "Conduct routine pharmacovigilance activities at the ART clinic by sampling patients initiated on ART drugs with co-infections and monitoring them for adverse reactions.",
                "Conduct distribution of drugs and medical supplies to health centers in the district, monitor their stock status to prevent overstocks which lead to commodities expiring.",
                "Do routine physical counts to check stock status and track expiry of commodities and implementing the use of FEFO and FIFO when it comes to storage.",
                "Conduct performance assessments to ascertain the quality of pharmaceutical services provided in the district.",
                "Assist in the monitoring of rational use of Antibacterial in the district through the antimicrobial subcommittee at Mwense District Hospital.",
                "Conduct forecasting and quantification of essential medicines, medical supplies, and antiretroviral drugs for the district.",
                "Provide technical support and on-site training of staff in the usage of eLMIS facility edition.",
                "Develop a viral load monitoring application to track the 90/90/90 2020 UNAIDS target in relation to viral suppression.",
                "Troubleshoot eLMIS facility edition. Provide mentorship in the essential medicine’s logistics improvement program.",
                "Participated as an enumerator in the 2018 demographic health survey.",
                "Perform on job training together with JSI – AIDSfree to facilities with newly deployed eLMIS facility edition.",
                "Assist in the deployment and networking of facilities with facility edition. Conduct routine monitoring of facilities in the district with eLMIS facility edition on the utilization especially dispensing of ARV drugs to clients using the system.",
              ]}
            />
            <Resumecontent
              title="ART Pharmacy Technologist [ Chreso Ministries (ART and VCT Centre) ]"
              date="November 2013 – October 2015"
              content={[
                "Ensure that reporting and ordering of antiretroviral drugs are done at appropriate times to establish and operate a self, secure, reliable, and sustainable supply chain management system of antiretroviral medications and other products needed.",
                "Oversee and track the movement of goods and materials through the organizations supply chain.",
                "Monitor inventory levels, tracking shipments, and ensuring that products are delivered on time and in the correct quantities.",
                "Dispensing drugs and giving pharmacological information to patients about side effects, drug interactions, and drug modifications.",
                "Perform analysis on stock availability vs projected clients. Conducting dispensations using SmartCare and follow up on late pharmacy pick up to promote adherence to drug treatment.",
                "Produce regimen data annually using SmartCare to take note of the number of clients on each regimen and submit for quantification of antiretroviral drugs.",
                "Conduct weekly presentations on stock availability and late for pharmacy pickup.",
                "Develop drug bulletin for the prescribing unit to know what drugs are available, their expiry and promote prescription creation of available commodities.",
                "Identifying and addressing any issues that arise in the supply chain, such as delays or disruptions.",
              ]}
            />
            <Resumecontent
              title="Community Pharmacy Technologist [ Palse Pharmacy, Chilenje	 ]"
              date="August 2013 – October 2013"
              content={[
                "Sell healthcare products, essential medicines, and other products.",
                "Responsible for stock monitoring and replenishment.",
                "Recommend which medications to stock based on market analysis and sales.",
                "Recommend which pharmaceutical vendors to engage with based on trade name preference by the community.",
                "Offer recommendations on alternative treatment types.",
                "Recommend generic cheaper versions to clients based on client needs.",
                "Provide basic diagnostic tests including Malaria test (RDT) and blood sugar.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
