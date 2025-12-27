import Tabs from './Tabs';
import DiyKitsImg from '/src/assets/diy-kits.jpg';
import VirtualLearningImg from '/src/assets/virtual-learning.jpg';
import WorkshopImg from '/src/assets/stem-workshop-students.jpg';

function LearningModesSection() {
  const tabs = [
    {
      id: 'diy',
      label: 'DIY Kits',
      content: (
        <div className="tab-grid">
          <div className="tab-text">
            <h2>DIY Robotics Kits</h2>
            <p className="tab-desc">
              Hands-on hardware and guided videos so learners can build, code,
              and iterate at their own pace.
            </p>
            <ul className="tab-list">
              <li><strong>Beginner to advanced</strong> tiered kits for every age group.</li>
              <li><strong>Stepwise lessons</strong> with quick wins to keep momentum high.</li>
              <li><strong>Reusable components</strong> to encourage experimentation.</li>
              <li><strong>Online support</strong> from mentors when students get stuck.</li>
            </ul>
          </div>
          <div className="tab-image">
            <img src={DiyKitsImg} alt="DIY robotics kits" />
          </div>
        </div>
      ),
    },
    {
      id: 'virtual',
      label: 'Virtual Classes',
      content: (
        <div className="tab-grid">
          <div className="tab-text">
            <h2>Live Virtual Coaching</h2>
            <p className="tab-desc">
              Instructor-led cohorts that mix live sessions with guided projects
              to build real portfolio pieces.
            </p>
            <ul className="tab-list">
              <li><strong>Small groups</strong> for more Q&A and code reviews.</li>
              <li><strong>Session recordings</strong> so learners can revisit tricky topics.</li>
              <li><strong>Project-driven</strong> sprints that ship something each week.</li>
              <li><strong>Career-facing</strong> feedback on demos and presentations.</li>
            </ul>
          </div>
          <div className="tab-image">
            <img src={VirtualLearningImg} alt="Virtual learning session" />
          </div>
        </div>
      ),
    },
    {
      id: 'workshop',
      label: 'Workshops',
      content: (
        <div className="tab-grid">
          <div className="tab-text">
            <h2>On-Campus Workshops</h2>
            <p className="tab-desc">
              High-energy, facilitator-led build-a-thon days that spark curiosity
              and teamwork.
            </p>
            <ul className="tab-list">
              <li><strong>Single or multi-day</strong> formats to fit school calendars.</li>
              <li><strong>Hardware included</strong> with safe, classroom-ready kits.</li>
              <li><strong>Teacher upskilling</strong> so programs keep running after we leave.</li>
              <li><strong>Showcase ready</strong> demos students present to peers and parents.</li>
            </ul>
          </div>
          <div className="tab-image">
            <img src={WorkshopImg} alt="STEM workshop with students" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="learning-modes" className="tab-section">
      <div className="container">
        <div className="section-header center-text">
          <h2>Pick How You Learn</h2>
          <p className="section-sub">
            Flexible tracks for makers, live learners, and teams that want an in-person boost.
          </p>
        </div>
        <Tabs tabs={tabs} defaultActiveId="diy" />
      </div>
    </section>
  );
}

export default LearningModesSection;
