import EventForm from '../components/EventForm';

function NewEventPage() {
    //return <h1> My New event Page </h1>
    /*function submitHandler(event){
        event.preventDefault();
    }*/
    return <EventForm  method='post'/>
}
export default NewEventPage;

