
import { FaCheck } from 'react-icons/fa6';

const SubscriptionPriCard = ({info}) => {
    
    return (
        <div className={`card   ${info.favorite? "bg-linear-to-bl from-violet-500 to-fuchsia-500": "bg-[#F2F2F2] text-black"} `}>
            <div className="card-body space-y-3.5 relative">
                <div className="flex justify-center items-center">
                    <p className="absolute -top-2 font-semibold text-white bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full px-3 ">{info.favorite}</p>
                </div>
              <div>
                <h2 className="card-title">{info.name}</h2>
                <p>{info.description}</p>
              </div>
              <div className="flex items-center">
                <h3 className="font-bold text-xl">${info.price}</h3>/
                <p>month</p>
              </div>
              <div>
                {info.feature.map((item, index) => (
                  <div key={index}>
                    <p className="flex items-center gap-2">
                      <FaCheck /> {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="card-actions justify-center">
                <button className={`${info.favorite ?  "bg-[#F2F2F2] text-black" : "bg-linear-to-r from-indigo-500 to-indigo-700 text-white"} btn w-full rounded-full`}>Buy Now</button>
              </div>
            </div>
          </div>
    );
};

export default SubscriptionPriCard;