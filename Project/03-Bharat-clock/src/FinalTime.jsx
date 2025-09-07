function FinalTime()
{
  const  n1 = new Date();
  const Date1= n1.toLocaleDateString();
  const time2 = n1.toLocaleTimeString();


  
  return <div>
    <h3>Current Date {Date1} Current time {time2}</h3>
  </div>
}
export default FinalTime;