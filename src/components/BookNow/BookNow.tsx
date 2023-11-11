import { useState } from "react";
import { bookNow } from "../../constants/constants";
import styles from "./index.module.scss";
import Select from "react-select";


interface select{
  defaultValue:string,
  onChange:()=>void,
  placeholder:string,
  blurInputOnSelect:boolean;
  isDisabled:boolean;
  autoFocus:boolean;
  components:()=>void

}


const BookNow = () => {
  const [selectedOption, setSelectedOption] = useState<null|select|any>(null);

  return (
    <div className={styles.bookContainer}>
      <form className={styles.bookForm}>
        {bookNow.map((item, index) => (
          <div className={styles.itemSelect} key={index}>
            <span className={styles.label}>{item.description}</span>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={item.option}
              placeholder={"Select"}
              blurInputOnSelect={false}
              isDisabled={false}
              autoFocus={false}
              components={{
                IndicatorSeparator: () => null,
              }}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  border: "none",
                  marginRight:10,
                  borderColor:'transparent',
                  boxShadow:"none",
                  color:'black',
                })
              }}

            />
          </div>
        ))}
      </form>
      <div className={styles.bookNow}>
        <button className={styles.bookButton}>
          <span>Book Now</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
          >
            <path
              d="M21.7071 8.7071C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928931C14.9526 0.538406 14.3195 0.538407 13.9289 0.928931C13.5384 1.31946 13.5384 1.95262 13.9289 2.34314L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.7071ZM8.74228e-08 9L21 9L21 7L-8.74228e-08 7L8.74228e-08 9Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BookNow;
