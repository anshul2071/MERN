import { Component } from "react";

const postData = [
  {
    title: "PHP Developer Required",
    description: "For a client project PHP Developer is required",
    location: "Kathmandu",
    job_type: "Full Time",
    pay_rate_per_hr_dollar: 10.0,
    skills: ["PHP", "JS", "HTML"],
    liked_by: ["test111", "test1", "test123"],
    viewed_by: ["test111", "test1", "test123"],
    id: 2,
    user_id: 1,
    post_by_username: "profile",
    post_by_fullname: "Test User",
    post_date: "2023-06-10T09:24:07.659034",
    comments: [],
  },
  {
    title: "PHP Developer Required",
    description: "For a client project PHP Developer is required",
    location: "Kathmandu",
    job_type: "Full Time",
    pay_rate_per_hr_dollar: 10.0,
    skills: ["PHP", "JS", "HTML"],
    liked_by: ["test111", "test1", "test123"],
    viewed_by: ["test111", "test1", "test123"],
    id: 3,
    user_id: 2,
    post_by_username: "profile",
    post_by_fullname: "Test User2",
    post_date: "2023-06-10T21:51:10.643105",
    comments: [],
  },
  {
    title: "PHP Developer Required",
    description: "For a client project PHP Developer is required",
    location: "Kathmandu",
    job_type: "Full Time",
    pay_rate_per_hr_dollar: 10.0,
    skills: ["PHP", "JS", "HTML"],
    liked_by: ["test111", "test1", "test123"],
    viewed_by: ["test111", "test1", "test123"],
    id: 4,
    user_id: 3,
    post_by_username: "profile",
    post_by_fullname: "Test User2",
    post_date: "2023-06-10T21:53:40.698655",
    comments: [],
  },
];

class PostSection extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const that = this;
    fetch("http://localhost:5000/api/v1/posts")
      .then((resp) => resp.json())
      .then((data) => {
        that.setState({ posts: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post, index) => (
          <div key={index} className="post-bar">
            <div className="post_topbar">
              <div className="usy-dt">
                <img
                  src={"./images/" + post.post_by_username + ".jpg"}
                  alt=""
                />
                <div className="usy-name">
                  {/* <h3>{this.props.user?.fullname}</h3> */}
                  <h3>{post.post_by_fullname}</h3>
                  <span>3 min ago</span>
                </div>
              </div>
              <div className="ed-opts">
                <a href="./index.html#" title="" className="ed-opts-open">
                  <i className="la la-ellipsis-v"></i>
                </a>
                <ul className="ed-options">
                  <li>
                    <a href="./index.html#" title="">
                      Edit Post
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      Unsaved
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      Unbid
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      Close
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      Hide
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="epi-sec">
              <ul className="descp">
                <li>
                  <img src="./images/icon8.png" alt="" />
                  <span>Epic Coder</span>
                </li>
                <li>
                  <img src="./images/icon9.png" alt="" />
                  <span>{post.location}</span>
                </li>
              </ul>
              <ul className="bk-links" style={{ display: "none" }}>
                <li>
                  <a href="./index.html#" title="">
                    <i className="la la-bookmark"></i>
                  </a>
                </li>
                <li>
                  <a href="./index.html#" title="">
                    <i className="la la-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="job_descp">
              <h3>{post.title}</h3>
              <ul className="job-dt">
                <li>
                  <a href="./index.html#" title="">
                    {post.job_type}
                  </a>
                </li>
                <li>
                  <span>{"$" + post.pay_rate_per_hr_dollar + "/ hr"}</span>
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id
                magna sit amet...
                <a href="./index.html#" title="">
                  view more
                </a>
              </p>
              <ul className="skill-tags">
                {post.skills.map((skills, idx2) => (
                  <li key={idx2}>
                    <a href="./index.html#" title="">
                      {skills}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="job-status-bar">
              <ul className="like-com">
                <li>
                  <a href="./index.html#">
                    <i className="fas fa-heart"></i> Like
                  </a>
                  <img src="./images/liked-img.png" alt="" />
                  <span>{post.liked_by.length}</span>
                </li>
                <li>
                  <a href="./index.html#" className="com">
                    <i className="fas fa-comment-alt"></i>{" "}
                    {"Comment" + post.comments.length}
                  </a>
                </li>
              </ul>
              <a href="./index.html#">
                <i className="fas fa-eye"></i>
                {"Views " + post.viewed_by.length}
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PostSection;