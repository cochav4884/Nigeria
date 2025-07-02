import React from "react";
import {
  FaDove,
  FaChurch,
  FaBook,
  FaUsers,
  FaChalkboardTeacher,
  FaCross,
  FaComment,
} from "react-icons/fa";

import HBG_bw3 from "../images/HBG_bw3.jpg";
import HBG_bw2 from "../images/HBG_bw2.jpg";
import HBG_bw4 from "../images/HBG_bw4.jpg";

const Church = () => {
  return (
    <div className="main_container">
      <div className="container-fluid">
        <header>
          <h1 className="page-header">Akute, Ogun State, Nigeria</h1>
        </header>
        <h2 className="section">* Meet Pastor Amos & Pastor Mike! *</h2>
        <h2 className="section">* Of The Heartbeat of God! *</h2>

        <div className="container">
          <section className="section">
            <img
              src={HBG_bw3}
              alt="HBG Church building"
              className="page-image"
            />
            <p>
              This beautiful community church is in the heart of Akute, Ogun
              State, Nigeria. It's a place to worship, gather with friends,
              repent & be forgiven, and enjoy the Holy Spirit... the Heartbeat
              of God (HBG) is the place for you.
            </p>
          </section>

          <section className="section">
            <img
              src={HBG_bw2}
              alt="HBG Church building"
              className="page-image"
            />
            <p>
              Home away from home, people from all over town gather to support
              each other in spiritual growth. The inspiring Pastor Amos Onogwu
              leads the congregation with love, guidance, and obedience.
            </p>
          </section>

          <section className="section">
            <img
              src={HBG_bw2}
              alt="HBG Church building"
              className="page-image"
            />
            <p>
              Pastor Amos Onogwu offers a safe place to open up to God, feel His
              healing through the Holy Spirit, and connect with fellow
              disciples. Come speak with Pastor Amos and discover your purpose
              through Jesus Christ and the Fruit of the Spirit.
            </p>
          </section>

          <section className="section">
            <img
              src={HBG_bw2}
              alt="HBG Church building"
              className="page-image"
            />
            <p>
              Service is held on Sundays at 9:00 AM. Supporting staff includes:
              (staff names/titles here). Thank you for your interest in our
              church, and may God bless you and your loved ones in Jesus's
              Mighty Name... AMEN!
            </p>
          </section>

          <h2 className="subheader">* Heartbeat of God *</h2>

          <div className="contact-info">
            <p>Address: Akute, Ogun State, Nigeria</p>
            <p>
              Contact: <br />
              (phone number) <br />
              (email)
            </p>
          </div>

          <section className="section">
            <img
              src={HBG_bw2}
              alt="Community church building in Akute"
              className="page-image"
            />
            <p>
              This beautiful community church is in the heart of the town of
              Akute, Ogun State, Nigeria. Need a place to worship, a place to
              gather amongst friends, a place to repent & be forgiven, a place
              to enjoy the Holy Spirit... the Heartbeat of God (HBG) is the
              place for you.
            </p>
          </section>

          <h2 className="subheader">* Pastor Amos Onogwu *</h2>

          <section className="section">
            <img
              src={HBG_bw4}
              alt="Pastor Amos Onogwu portrait"
              className="page-image"
            />
            <p>
              Pastor Amos Onogwu has been with HBG since 2010. Born in Akute, he
              was raised by a strong Christian family. After completing his
              education, Pastor Amos felt called by God to serve as a leader.
            </p>
          </section>

          {/* Pastor Amos Q&A */}
          <h2 className="subheader">* Pastor Amos *</h2>
          <div className="video-wrapper">
  <video width="100%" height="400" controls>
    <source src="/videos/interview-amos.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

          <div className="pastor_section">
            <section className="qa-section">
              <details>
                <summary>
                  <FaDove /> Spiritual Leadership & Vision
                </summary>
                <ul>
                  <li>
                    What inspired you to become a pastor, and how did your
                    calling unfold?
                  </li>
                  <li>
                    What is the mission and vision of the Heartbeat of God
                    Church?
                  </li>
                  <li>
                    How do you stay spiritually grounded in the face of modern
                    challenges?
                  </li>
                  <li>
                    What is your message for the youth in Akute and beyond?
                  </li>
                </ul>
              </details>
              <details>
                <summary>
                  <FaChurch /> Church Programs & Outreach
                </summary>
                <ul>
                  <li>
                    What weekly or monthly programs does the church offer?
                  </li>
                  <li>
                    How does the church support local families and youth in
                    Akute?
                  </li>
                  <li>
                    Are there any outreach missions or partnerships with other
                    churches or organizations?
                  </li>
                  <li>
                    How do you incorporate music and arts into worship services?
                  </li>
                </ul>
              </details>
              <details>
                <summary>
                  <FaBook /> Teachings & Theology
                </summary>
                <ul>
                  <li>
                    What are the core biblical principles you emphasize in your
                    ministry?
                  </li>
                  <li>
                    How does the church help members apply scripture to their
                    daily lives?
                  </li>
                  <li>
                    How do you handle controversial or difficult topics within
                    the church?
                  </li>
                </ul>
              </details>
              <details>
                <summary>
                  <FaUsers /> Community & Impact
                </summary>
                <ul>
                  <li>
                    What role does the Heartbeat of God Church play in the Akute
                    community?
                  </li>
                  <li>
                    What challenges do people in the local community face, and
                    how does the church respond?
                  </li>
                  <li>
                    Are there opportunities for locals or visitors to get
                    involved in church activities?
                  </li>
                </ul>
              </details>
              <details>
                <summary>
                  <FaChalkboardTeacher /> Youth & Education
                </summary>
                <ul>
                  <li>
                    Does the church offer Bible study, mentorship, or
                    educational support for young people?
                  </li>
                  <li>
                    How do you encourage the next generation to develop
                    leadership skills and faith?
                  </li>
                </ul>
              </details>
              <details>
                <summary>
                  <FaCross /> Cultural & Creative Expression
                </summary>
                <ul>
                  <li>
                    How important is music and worship in your church services?
                  </li>
                  <li>
                    Does the church support or promote local gospel artists,
                    choirs, or musicians?
                  </li>
                </ul>
              </details>
              <details>
                <summary>
                  <FaComment /> Personal & Pastoral Reflections
                </summary>
                <ul>
                  <li>
                    What is one of the most memorable testimonies you’ve
                    witnessed as a pastor?
                  </li>
                  <li>
                    What message would you like to share with Nigerians abroad
                    or those interested in visiting Akute?
                  </li>
                </ul>
              </details>
            </section>
          </div>

          <h2 className="subheader">* Pastor Mike *</h2>
          <div className="video-wrapper">
  <video width="100%" height="400" controls>
    <source src="/videos/interview-amos.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

          <div className="pastor_section">
            <section className="qa-section">
              <details>
                <summary>
                  <FaDove /> Spiritual Leadership & Vision
                </summary>
                <ul>
                  <li>
                    What motivated you to step into ministry, and how has God
                    guided you along the way?
                  </li>
                  <li>
                    How do you support and complement the vision set by Pastor
                    Amos at HBG?
                  </li>
                  <li>
                    What spiritual practices do you personally rely on to stay
                    focused and faithful?
                  </li>
                  <li>
                    How do you bring fresh perspective to leadership as part of
                    a younger generation of pastors?
                  </li>
                </ul>
              </details>

              <details>
                <summary>
                  <FaChurch /> Church Programs & Outreach
                </summary>
                <ul>
                  <li>
                    What outreach programs have you helped develop or lead at
                    HBG?
                  </li>
                  <li>
                    How do you connect with young adults and teenagers in the
                    community?
                  </li>
                  <li>
                    What has been the most impactful outreach experience you've
                    had?
                  </li>
                  <li>
                    Are there any new ministries or projects you’re hoping to
                    launch?
                  </li>
                </ul>
              </details>

              <details>
                <summary>
                  <FaBook /> Teachings & Theology
                </summary>
                <ul>
                  <li>
                    What books or passages from the Bible do you most often
                    teach or meditate on?
                  </li>
                  <li>
                    How do you help younger members engage deeply with
                    scripture?
                  </li>
                  <li>
                    How do you balance biblical truth with compassion in your
                    preaching and teaching?
                  </li>
                </ul>
              </details>

              <details>
                <summary>
                  <FaUsers /> Community & Impact
                </summary>
                <ul>
                  <li>
                    What do you believe is the church's greatest opportunity to
                    impact Akute right now?
                  </li>
                  <li>
                    How have you personally witnessed transformation in the
                    lives of church members?
                  </li>
                  <li>
                    In what ways do you encourage churchgoers to serve the local
                    community?
                  </li>
                </ul>
              </details>

              <details>
                <summary>
                  <FaChalkboardTeacher /> Youth & Education
                </summary>
                <ul>
                  <li>
                    Why is youth discipleship important to you, and how do you
                    approach mentoring?
                  </li>
                  <li>
                    What role does education — both spiritual and academic —
                    play in your ministry?
                  </li>
                  <li>
                    Can you share a success story of a youth you’ve mentored at
                    HBG?
                  </li>
                </ul>
              </details>

              <details>
                <summary>
                  <FaCross /> Cultural & Creative Expression
                </summary>
                <ul>
                  <li>
                    How do you use music, drama, or creativity to engage the
                    youth?
                  </li>
                  <li>
                    What styles of worship resonate most with younger members at
                    HBG?
                  </li>
                  <li>
                    Do you collaborate with local artists or musicians as part
                    of your ministry?
                  </li>
                </ul>
              </details>

              <details>
                <summary>
                  <FaComment /> Personal & Pastoral Reflections
                </summary>
                <ul>
                  <li>
                    What’s one life-changing lesson God has taught you since
                    becoming a pastor?
                  </li>
                  <li>
                    What encouragement would you give to young men and women
                    considering ministry?
                  </li>
                  <li>
                    How do you hope to grow personally and spiritually in the
                    next 5 years?
                  </li>
                </ul>
              </details>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Church;
