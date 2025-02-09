import { motion } from 'motion/react';
import { useState } from 'react';

export default function Contact() {
	const [{ name, email, message }, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		window.open(`mailto:rakeshgandla200@gmail.com?subject=Message from ${name}&body=${message}`);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	};

	return (
		<motion.div
			id="contact"
			className="section flex flex-col gap-4 shadow-lg p-8 w-screen sm:w-[70vw] border-2 border-gray-200 dark:border-gray-800 rounded-lg"
		>
			<motion.h2 className="text-2xl font-semibold text-gray-500 border-b-2 pb-3">Write me a message</motion.h2>
			<motion.div className="flex flex-col gap-4">
				<motion.form className="flex flex-col gap-4 select-auto" onSubmit={handleSubmit}>
					<motion.input
						type="text"
						name="name"
						value={name}
						onChange={handleChange}
						placeholder="Sender name"
						className="input p-2 bg-white border-2 border-gray-200 dark:border-gray-800 rounded-lg input-bordered w-full"
					/>
					<motion.input
						type="email"
						name="email"
						value={email}
						onChange={handleChange}
						placeholder="Sender email"
						className="input p-2 bg-white border-2 border-gray-200 dark:border-gray-800 rounded-lg input-bordered w-full "
					/>
					<motion.textarea
						name="message"
						value={message}
						onChange={handleChange}
						placeholder="Message"
						rows={4}
						className="textarea p-2 bg-white border-2 border-gray-200 dark:border-gray-800 rounded-lg textarea-bordered w-full "
					/>
					<motion.button className="btn btn-primary text-white dark:text-white">Send an email</motion.button>
				</motion.form>
			</motion.div>
		</motion.div>
	);
}
