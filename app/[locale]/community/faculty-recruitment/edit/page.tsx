import FacultyRecruitmentEditPageContent from './FacultyRecruitmentEditPageContent';

export default async function FacultyRecruitmentEditPage() {
  //   const data = await getFacultyRecruitment();
  const data = await getmock();

  return <FacultyRecruitmentEditPageContent data={data} />;
}

const getmock = async () => ({
  title: 'Seoul National University Computer Science &amp; Engineering Faculty Hiring',
  mainImageUrl: null,
  description: `<p>The Department of Computer Science and Engineering in Seoul National University(SNU) is delighted to announce <strong>three faculty positions for recruitment in the 2025&nbsp;</strong>academic year (starting on March 1, 2025).</p><p>We are looking for<strong> outstanding</strong> candidates in all areas of Computer Science &amp; Engineering, and also in Computational Displays and Holography.</p><p>The positions are <strong>at all ranks</strong>: tenure-track Assistant Professor, tenure-track Associate Professor, or tenured Full Professor.</p><p>The Seoul National University Computer Science and Engineering (SNU CSE) department comprises 34 full-time faculty members, along with approximately 350 graduate students and 400 undergraduate students. Our faculty members are at the forefront of world-class research &amp; education, leading a <a href="https://cse.snu.ac.kr/en/research/groups" target="_blank" rel="noopener noreferrer"><u><span style="color:#0000ff">wide spectrum of research laboratories</span></u></a>, spanning from theoretical foundations to computer systems and cutting-edge applications.</p><p>For further details, please email our department head directly: <a href="mailto:head@cse.snu.ac.kr"><u><span style="color:#0000ff">head@cse.snu.ac.kr</span></u></a></p><ul><li>The closing date for applications will be 21st October, 2024.</li><li>The application materials must include at least a CV and more than two recommendation letters. Material submission will be done online through our <a href="https://facultyrecruitment.snu.ac.kr" target="_blank" rel="noopener noreferrer"><u><span style="color:#0000ff">official webpage</span></u></a>. Meanwhile, applicants are encouraged to reach out to the department head at <a href="mailto:head@cse.snu.ac.kr" target="_blank" rel="noopener noreferrer"><u><span style="color:#0000ff">head@cse.snu.ac.kr</span></u></a>and submit their CVs for consideration.</li><li>With shortlisted candidates we will have interviews in person. Each interview (one or two-day long) includes a research presentation and one-on-one meetings with our faculty members. The interviews will be held during November, 2024. </li><li>The final decision will be made during January 2025.</li></ul>`,
});
