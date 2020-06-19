import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import FooterDefault from "components/Footers/FooterDefault.js";
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar";

function ProfilePage() {
  const [pills, setPills] = React.useState("1");
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <FixedTransparentNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <h3 className="title">Sus compras</h3>
            <h5 className="description text-center">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </h5>
            <Row>
              <Col md="12">
                <h4 className="title text-center">My Portfolio</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        onClick={e => {
                          e.preventDefault();
                          setPills("1");
                        }}
                        className={pills === "1" ? "active" : ""}
                        role="tablist"
                        href="#pablo"
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}
                        className={pills === "2" ? "active" : ""}
                        role="tablist"
                        href="#pablo"
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        onClick={e => {
                          e.preventDefault();
                          setPills("3");
                        }}
                        className={pills === "3" ? "active" : ""}
                        role="tablist"
                        href="#pablo"
                      >
                        <i className="now-ui-icons design-2_ruler-pencil"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <TabContent className="gallery" activeTab={"pills" + pills}>
                  <TabPane tabId="pills1">
                    <Row>
                      <Col className="ml-auto mr-auto" md="5">
                        <Card
                          className="card-background card-background-product card-raised"
                          style={{
                            backgroundImage:
                              "url(" + require("assets/img/bg23.jpg") + ")"
                          }}
                        >
                          <CardBody>
                            <CardTitle tag="h2">Chair remake.</CardTitle>
                            <p className="card-description text-white">
                              Trello’s boards, lists, and cards enable you to
                              organize and prioritize your projects in a fun,
                              flexible and rewarding way. It was a great project
                              and I would be more than happy to do it again.
                            </p>
                            <Badge className="badge-neutral">Trello</Badge>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="5">
                        <div className="info info-horizontal">
                          <div className="icon icon-warning">
                            <i className="now-ui-icons users_single-02"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">Work With Any Team</h5>
                            <p className="description">
                              Whether it’s for work or even the next family
                              vacation, Trello helps your team.
                            </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-warning">
                            <i className="now-ui-icons business_chart-bar-32"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">
                              A Productivity Platform
                            </h5>
                            <p className="description">
                              Integrate the apps your team already uses directly
                              into your workflow.
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="pills2">
                    <Row>
                      <Col className="ml-auto mr-auto" md="5">
                        <Card
                          className="card-background card-background-product card-raised"
                          style={{
                            backgroundImage:
                              "url(" + require("assets/img/project8.jpg") + ")"
                          }}
                        >
                          <CardBody>
                            <CardTitle tag="h2">Social Analytics</CardTitle>
                            <p className="card-description">
                              Insight to help you create, connect, and convert.
                              Understand Your Audience's Interests, Influence,
                              Interactions, and Intent. Discover emerging topics
                              and influencers to reach new audiences.
                            </p>
                            <Badge className="badge-neutral">Analytics</Badge>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="5">
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="now-ui-icons ui-2_chat-round"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">
                              Listen to Social Conversations
                            </h5>
                            <p className="description">
                              Gain access to the demographics, psychographics,
                              and location of unique people who talk about your
                              brand.
                            </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="now-ui-icons design-2_ruler-pencil"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">Social Conversions</h5>
                            <p className="description">
                              Track actions taken on your website that
                              originated from social, and understand the impact
                              on your bottom line.
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="pills3">
                    <Row>
                      <Col className="ml-auto mr-auto" md="5">
                        <Card
                          className="card-background card-background-product card-raised"
                          style={{
                            backgroundImage:
                              "url(" + require("assets/img/bg25.jpg") + ")"
                          }}
                        >
                          <CardBody>
                            <CardTitle tag="h2">Interior Redesign</CardTitle>
                            <p className="card-description">
                              Insight to help you create, connect, and convert.
                              Understand Your Audience's Interests, Influence,
                              Interactions, and Intent. Discover emerging topics
                              and influencers to reach new audiences.
                            </p>
                            <Badge className="badge-neutral">Interior</Badge>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="5">
                        <div className="info info-horizontal">
                          <div className="icon icon-info">
                            <i className="now-ui-icons design_palette"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">Colors adjustments</h5>
                            <p className="description">
                              Gain access to the demographics, psychographics,
                              and location of unique people who talk about your
                              brand.
                            </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-info">
                            <i className="now-ui-icons design_scissors"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">Performance Clothing</h5>
                            <p className="description">
                              Unify data from Facebook, Instagram, Twitter,
                              LinkedIn, and Youtube to gain rich insights from
                              easy-to-use reports.
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterDefault />
      </div>
    </>
  );
}

export default ProfilePage;
