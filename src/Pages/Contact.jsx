import Swal from "sweetalert2";


const Contact = () => {

	const handleSend = () =>{
		Swal.fire({
			title: 'Success!',
			text: `Successfully sent`,
			icon: 'success',
			confirmButtonText: 'Cool',
			timer: 3500
	})
	}
    return (
        <div className=" pt-28">
            <section className="p-6 text-gray-100 dark:text-gray-800">
	<form onSubmit={handleSend} noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900 dark:bg-gray-50">
		<h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Name</label>
			<input  id="name" type="text" placeholder="Your name"  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 focus:dark:ring-violet-600 bg-gray-800 dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input  id="email" type="email" placeholder="Your email" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 focus:dark:ring-violet-600 bg-gray-800 dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">Message</label>
			<textarea required id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 focus:dark:ring-violet-600 bg-gray-800 dark:bg-gray-100"></textarea>
		</div>
		<div>
			<button  type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 dark:bg-violet-600 focus:ring-violet-400 focus:dark:ring-violet-600 hover:ring-violet-400 hover:dark:ring-violet-600 text-gray-900 dark:text-gray-50">Send</button>
		</div>
	</form>
</section>
        </div>
    );
};

export default Contact;