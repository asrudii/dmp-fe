import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import '../../assets/styles/instagramReached.css';
import StatisticCard from '../StatisticCard';

export default function InstagramReached({ type }) {
  return (
    <div className="instagram-reached">
      <div className="instagram-head">
        <span className="instagram-title">Averange Reached</span>
        <span className="total">2,1k</span>
        <div className="data-percent">
          {type === 'decrease' ? (
            <div className="decrease">
              <FiChevronDown size={18} />
              <span>-8,86%</span>
            </div>
          ) : (
            <div className="increase">
              <FiChevronUp size={18} />
              <span>+8,86%</span>
            </div>
          )}
          <span>from 2 September 2021 - 30 November 2022</span>
        </div>
      </div>
      <span className="instagram-title">Reached Audience</span>
      <div className="statistic">
        <StatisticCard
          title="Top Age Range"
          titleOne="18-24"
          titleTwo="24-34"
          titleThree="33-44"
          titleFour="45-54"
          valueOne={54.2}
          valueTwo={11.8}
          valueThree={5}
          valueFour={3.3}
          type="line"
        />
        <StatisticCard
          title="Gender"
          circleTitleOne="Men"
          circleTitleTwo="Women"
          circleValueOne={72.67}
          circleValueTwo={27.33}
        />
        <StatisticCard
          title="Top Cities"
          titleOne="Bandung"
          titleTwo="Makassar"
          titleThree="Jakarta"
          titleFour="Banyumas"
          valueOne={54.2}
          valueTwo={11.8}
          valueThree={5}
          valueFour={3.3}
          type="line"
        />
        <StatisticCard
          title="Top Countries"
          titleOne="Indonesia"
          titleTwo="India"
          titleThree="Canada"
          titleFour="Japan"
          valueOne={54.2}
          valueTwo={11.8}
          valueThree={5}
          valueFour={3.3}
          type="line"
        />
        <StatisticCard
          title="Content Reach"
          titleOne="Stories"
          titleTwo="Posts"
          titleThree="Reels"
          valueOne={45}
          valueTwo={23}
          valueThree={7}
          topicOne="Followers"
          topicTwo="Non-Followers"
          type="line"
        />
        <StatisticCard
          title="Followers and Non-Followers"
          circleTitleOne="Followers"
          circleTitleTwo="Non-Followers"
          circleValueOne={80}
          circleValueTwo={20}
        />
      </div>
    </div>
  );
}
