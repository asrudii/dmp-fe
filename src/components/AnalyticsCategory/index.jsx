import '../../assets/styles/analysisCategory.css';

export default function AnalyticsCategory() {
  return (
    <div className="analysis-category">
      <h2>Analytics</h2>
      <div className="btn-category">
        <button className="active">Instagram</button>
        <button>TikTok</button>
        <button>Twitter</button>
        <button>YouTube</button>
        <button>WhatsApp</button>
        <button>Telegram</button>
        <button>E-Mail</button>
        <button>SMS</button>     
      </div>
    </div>
  );
}
