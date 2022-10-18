import s from "../styles/PricingTable.module.css"
import {pricing} from "../lib/pricing_info"

function PricingTable() {

  return (
      <div className={s.container}>
        {pricing.map((p, index) => {
          console.log(p.items);
          return (
            <div className={s.table} key={`table_${index}`}>
              <div className={s.tableInner}>
                <h2>{p.option}</h2>
                <div className={s.optionCntainer}>
                  <div
                    className={s.option}
                    style={{
                      backgroundImage: `url(${p.img})`,
                      backgroundColor: 'aqua',
                    }}
                  ></div>
                </div>
                <div className={s.price}>{p.price}</div>
                <div className={s.content}>
                  <ul>
                    {p.items.map((i, index) => {
                      return <li key={`item_${index}`}>{i.item}</li>;
                    })}
                  </ul>
                </div>
                <button className={s.cta}>Details</button>
              </div>
            </div>
          );
        })}
      </div>
  );
    }

    export default PricingTable