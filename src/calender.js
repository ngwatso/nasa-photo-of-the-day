import react, {useState} from 'react'
import ReactDatePicker from 'react-datepicker';



const calender = () => {
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = ({ value, onClick }) => (
        <button className="example-custom-input" onClick={onClick}>
            {value}
        </button>
    );

    return (
        <ReactDatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            customInput={<ExampleCustomInput />}
        />
    );
};

export default calender;