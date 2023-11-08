import CustomCalender from '../components/CustomCalender';
import DonutChart from '../components/donutChart';

function UserDash() {
    return (
        <div>
            <div className='flex '>
                <div>
                    <CustomCalender/>
                </div>
                <div>
                    <DonutChart/>
                </div>
            </div>
            
        </div>
    );
}

export default UserDash;
