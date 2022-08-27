import IcFilter from '../../assets/icons/filter.svg';
import '../../assets/styles/button.css';

export default function Button({ title }) {
  return (
    <button className="button-outline">
      <img src={IcFilter} alt="filter-icon" />
      {title}
    </button>
  );
}
