import '../../assets/styles/analysisCard.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function AnalysisCard({ title, total, percent, type }) {
  return (
    <div className="card-analysis">
      <span>{title}</span>
      <span className="total">{total}K</span>
      <div className="data-percent">
        {type === 'decrease' ? (
          <div className="decrease">
            <FiChevronDown size={18} />
            <span>-{percent}%</span>
          </div>
        ) : (
          <div className="increase">
            <FiChevronUp size={18} />
            <span>+{percent}%</span>
          </div>
        )}
        <span>in last 90 days</span>
      </div>
    </div>
  );
}
