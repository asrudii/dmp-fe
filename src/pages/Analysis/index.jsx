import { FiArrowLeft } from 'react-icons/fi';
import { Select, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import Template from '../../components/Template';
import '../../assets/styles/analysis.css';
import AnalyticsCategory from '../../components/AnalyticsCategory';
import AnalysisCard from '../../components/AnalysisCard';
import InstagramReached from '../../components/InstagramReached';

export default function Analysis() {
  const { TabPane } = Tabs;
  const { Option } = Select;

  return (
    <Template defaultSelectedKeys="2">
      <div className="container-primary analysis">
        <nav className="nav">
          <div className="nav-title-wrap">
            <h2>Detail Analytics Campaign</h2>
            <span>
              Analytical Campaign/Campaign List /Detail Analytics Campaign
            </span>
          </div>
          <Link to="/">
            <div className="nav-topright">
              <FiArrowLeft size={24} color="#BC1414" />
              <span>Back</span>
            </div>
          </Link>
        </nav>

        {/* analysis detail */}
        <div className="detail-analysis">
          <div className="detail-first">
            <div className="detail-group">
              <span className="detail-title">Nama Campaign</span>
              <span className="detail-title">Product Campaign</span>
            </div>
            <div className="detail-group">
              <span>Paket Bundling Internet Pelajar</span>
              <span>
                Internet 2P (Internet Phone) Paket Pelajar, Pendidikan, dan
                Jurnalis
              </span>
            </div>
          </div>
          <div className="devider" />
          <div className="detail-group">
            <span className="detail-title">Start Date - End Date</span>
            <span>02 June 2022 - 23 September 2022</span>
          </div>
          <div className="devider" />
          <div className="detail-group">
            <span className="detail-title">Uploaded at</span>
            <span>14/02/2022, 15:10 WIB</span>
          </div>
          <div className="devider" />
          <div className="detail-group">
            <span className="detail-title">Made by</span>
            <span>Jane Cooper</span>
          </div>
        </div>

        <AnalyticsCategory />

        {/* analysis data */}
        <div className="data-analysis">
          <h2>INSTAGRAM</h2>
          <div className="data-analysis-wrap">
            {/* filter */}
            <div className="data-analysis-filter">
              <span className="data-filter-title">Insights Overview</span>
              <Select
                defaultValue="thismonth"
                style={{
                  width: 151,
                }}
              >
                <Option value="thismonth">Last 30 Days</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              <span className="detail-title">Nov 30 - Feb 27</span>
            </div>

            {/* average */}
            <div className="averange">
              <AnalysisCard
                title="Averange Reached"
                total={2.1}
                percent={8.86}
                type="decrease"
              />
              <AnalysisCard
                title="Average Enganged"
                total={8}
                percent={6.86}
                type="decrease"
              />
              <AnalysisCard
                title="Total Followers"
                total={1.6}
                percent={1.2}
                type="increase"
              />
            </div>

            {/* Tabs averange */}
            <Tabs defaultActiveKey="1">
              <TabPane tab="Accounts Reached" key="1">
                <InstagramReached type="decrease" />
              </TabPane>
              <TabPane tab="Accounts Engaged" key="2">
                <InstagramReached type="decrease" />
              </TabPane>
              <TabPane tab="Total Followers" key="3">
                <InstagramReached type="decrease" />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </Template>
  );
}
