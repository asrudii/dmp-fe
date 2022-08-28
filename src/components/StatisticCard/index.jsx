import { Progress, Badge } from 'antd';
import '../../assets/styles/statisticCard.css';

export default function StatisticCard({
  title,
  titleOne,
  titleTwo,
  titleThree,
  titleFour,
  valueOne,
  valueTwo,
  valueThree,
  valueFour,
  circleTitleOne,
  circleTitleTwo,
  circleValueOne,
  circleValueTwo,
  topicOne,
  topicTwo,
  type,
}) {
  return (
    <div className="statistic-card">
      <div className="statistic-title">
        <span>{title}</span>
      </div>
      {type === 'line' ? (
        <div className="statistic-wrap">
          {titleOne && (
            <div className="statistic-group">
              <span>{titleOne}</span>
              <Progress
                strokeWidth={12}
                strokeColor="#BC1414"
                percent={valueOne}
              />
            </div>
          )}
          {titleTwo && (
            <div className="statistic-group">
              <span>{titleTwo}</span>
              <Progress
                strokeWidth={12}
                strokeColor="#BC1414"
                percent={valueTwo}
              />
            </div>
          )}
          {titleThree && (
            <div className="statistic-group">
              <span>{titleThree}</span>
              <Progress
                strokeWidth={12}
                strokeColor="#BC1414"
                percent={valueThree}
              />
            </div>
          )}
          {titleFour && (
            <div className="statistic-group">
              <span>{titleFour}</span>
              <Progress
                strokeWidth={12}
                strokeColor="#BC1414"
                percent={valueFour}
              />
            </div>
          )}
          {topicOne && topicTwo && (
            <div className='topic'>
              <div className="topic-title">
                <div
                  className="badge"
                  style={{
                    background: '#bc1414',
                  }}
                />
                <span>{topicOne}</span>
              </div>
              <div className="topic-title">
                <div
                  className="badge"
                  style={{
                    background: '#E0E0E0',
                  }}
                />
                <span>{topicTwo}</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="statistic-circle">
          <div>
            <span className="percent-circle">{circleValueOne}%</span>
            <div className="topic-title">
              <div
                className="badge"
                style={{
                  background: '#bc1414',
                }}
              />
              <span>{circleTitleOne}</span>
            </div>
          </div>
          <Progress
            strokeColor="#BC1414"
            strokeWidth={12}
            width={221}
            type="circle"
            format={() => ''}
            percent={circleValueOne}
          />
          <div>
            <span className="percent-circle">{circleValueTwo}%</span>
            <div className="topic-title">
              <div
                className="badge"
                style={{
                  background: '#E0E0E0',
                }}
              />
              <span>{circleTitleTwo}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
