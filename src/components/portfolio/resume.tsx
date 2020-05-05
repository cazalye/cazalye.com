import React, {Component} from 'react';
// import {Grid, Cell,Tooltip,Icon} from 'react-mdl';
// import Education from './education';
// import Experience from './experience';
// import Skills from './skills';
// import Publications from './publications';
// import Awards from './awards';
// import References from './references';

// class Resume extends Component {
//     render() {
//         return(
//                 <Grid className="resume-grid">
//                     <Cell className="resume-col resume-left-col" col={4}> 
//                         <h1>A designer who codes</h1>
//                         <h2>I create inspiring websites, evocative designs and catchy copy. My work centers around adventure, conscious living and environmental awareness.</h2>
//                     </Cell>
//                     <Cell className="resume-col resume-right-col" col={8}>
//                             <Tooltip className="arrow-tooltip" label="Scroll Down" position="bottom">
//                                 <Icon name="arrow_downward" />
//                             </Tooltip>
//                         <h2>Skills</h2>
//                          <Skills
//                             skill="Adobe Suite: Ps, Lr, Ai, Id, Xd"
//                             progress={60}
//                         />
//                         <Skills
//                             skill="html / CSS / SASS"
//                             progress={80}
//                         />
//                         <Skills
//                             skill="JavaScript / TypeScript"
//                             progress={40}
//                         />
//                         <Skills
//                             skill="React"
//                             progress={40}
//                         />
//                         <Skills
//                             skill="Git & Github"
//                             progress={60}
//                         />
//                         <Skills
//                             skill="Big Data Analysis"
//                             progress={100}
//                         />
//                         <Skills
//                             skill="Unix-based tools"
//                             progress={70}
//                         />
//                         <Skills
//                             skill="R"
//                             progress={100}
//                         />
//                         <Skills
//                             skill="Python"
//                             progress={20}
//                         />
//                         <Skills
//                             skill="Machine Learning"
//                             progress={10}
//                         />
//                         <Skills
//                             skill="Molecular Biology"
//                             progress={100}
//                         />
//                         <Skills
//                             skill="Statistics"
//                             progress={100}
//                         />
//                         <Skills
//                             skill="Project Management"
//                             progress={100}
//                         />
//                         <hr/>
//                         <h2>Experience</h2>
//                         <Experience
//                             startYear={2017}
//                             endYear={2019}
//                             jobName="Post-doctoral Researcher: Institute for Molecular Medicine Finland"
//                             jobDescription="I processed and analysed big data (biological & survey data) from over 2,000 individuals to determine the various
//                             contributions of inherited and environmental factors in complex disease
//                             aetiology. I co-supervised 5 post-graduate students, wrote and reviewed grant applications and was the 1st author on a cross-disciplinary article examining data integration approaches in epigenetics."
//                         />
//                         <Experience
//                             startYear={2016}
//                             endYear={2017}
//                             jobName="Research Assistant: Menzies Institute for Medical Research"
//                             jobDescription="I investigated the key barriers and enablers to the undergraduate research experience, in over 300 students, across 4 medical science degrees. I managed online surveys, collated and de-identified responses, analysed data in NVivo and prepared results for publication."
//                         />
//                         <Experience
//                             startYear={2012}
//                             endYear={2016}
//                             jobName="PhD Candiate: Menzies Institue for Medical Research"
//                             jobDescription="Through a cross-disciplinary PhD, I developed a range of wet-lab molecular biology and data analysis skills. I combined this expertise to examine genetic and epigenetic predisposition to familial prostate cancer, resulting in the publication of 2 first author articles, 7 national & international conference
//                             presentations and 3 awards, valued at over 120,000 AUD." 
//                         />
//                         <Experience
//                             startYear="Jun"
//                             endYear="Sep 2016"
//                             jobName="Marketing Assistant: University of Tasmania"
//                             jobDescription="I was the sole marketing support officer responsible for 'Research Week', the University's flagship research event with 44 events delivered state-
//                             wide, attracting over 1500 participants from the University and wider
//                             community."
//                         />
//                         <Experience
//                             startYear={2013}
//                             endYear={2016}
//                             jobName="Tertiary Level Teaching: University of Tasmania"
//                             jobDescription="Throughout my PhD candidature I engaged in casual teaching roles
//                             including tutoring, laboratory demonstrating and marking. I communicated
//                             complex scientific ideas, and facilitated student discussion and learning."
//                         />
//                         <Experience
//                             startYear={2009}
//                             endYear={2011}
//                             jobName="Assistant Manager: Flight Centre Ulverstone"
//                             jobDescription="I tailored leisure and business travel for a range of
//                             clients, which required exceptional customer service, sales, and product and destination
//                             knowledge. I consistently achieved excellent results though daily KPIs, mystery shopping, and monthly and annual targets. As assistant manager I was also responsible for
//                             finances, planning, staff development, conflict resolution and customer
//                             care."
//                         />

//                         <hr/>
//                         <h2>Education</h2>  
//                         <Education 
//                             startYear={2004} 
//                             endYear={2008}
//                             schoolName="University of Tasmania"
//                             schoolDescription="Bachelor of Medical Research with First Class Honours"
//                         />
//                         <Education
//                             startYear={2012} 
//                             endYear={2016}
//                             schoolName="Menzies Institue for Medical Research & University of Tasmania"
//                             schoolDescription="PhD in Medical Research, School of Medicine"
//                         />
//                         <hr/>
//                         <h2>First Author Publications</h2>
//                         <Publications
//                             publicationYear={2020}
//                             publicationTitle="Associations of alcohol consumption with epigenome-wide DNA methylation and epigenetic age acceleration: Individual-level and co-twin comparison analyses"
//                             publicationLink="Under Review"
//                         />
//                         <Publications
//                             publicationYear={2019}
//                             publicationTitle="Making Sense of the Epigenome Using Data Integration Approaches"
//                             publicationLink="https://doi.org/10.3389/fphar.2019.00126"
//                         />
//                         <Publications
//                             publicationYear={2016}
//                             publicationTitle="Comparison of pre-processing methodologies for Illumina 450k methylation array data in familial analyses"
//                             publicationLink="https://doi.org/10.1186/s13148-016-0241-2"
//                         />
//                         <Publications
//                             publicationYear={2015}
//                             publicationTitle="Genetic Determinants of Epigenetic Patterns: Providing Insight into Disease"
//                             publicationLink="https://doi.org/10.2119%2Fmolmed.2015.00001"
//                         />

//                         <hr/>
//                         <h2>Awards</h2>
//                         <Awards
//                             year="2014 - 2016" 
//                             awardTitle="Cancer Auxiliary
//                             PhD Scholarship"
//                             awardAmount="15,000 AUD"
//                         />
//                         <Awards
//                             year="2012 - 2016"
//                             awardTitle="Australian Post
//                             Graduate Award"
//                             awardAmount="100,000 AUD"
//                         />
//                         <Awards
//                             year={2008}
//                             awardTitle="Menzies Institute
//                             Honours Scholarship"
//                             awardAmount="5,000 AUD"
//                         />
//                         <Awards
//                             year={2004}
//                             awardTitle="Dean's Roll of Excellence"
//                             awardAmount=""
//                         />

//                         <hr/>
//                         <h2>References</h2>
//                         <References
//                             Name="Professor Jaakko Kaprio"
//                             Description="Laboratory Head, Previous Institute Director"
//                             Email="jaako.kaprio@helsinki.fi"
//                         />
//                         <References
//                             Name="Assistant Professor Jing Tang"
//                             Description="Collaborator, Co-author of 2019 Publication"
//                             Email="jing.tang@fimm.fi"
//                         />
//                         <References
//                             Name="Associate Professor Adele Holloway"
//                             Description="PhD Supervisor & Mentor"
//                             Email="a.f.holloway@utas.edu.au"
//                         />
//                     </Cell>
//                 </Grid>
//         )
//     }
// }

// export default Resume;

