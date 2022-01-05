import React from 'react';
import { render } from 'react-dom';
import { Formik, Field, Form } from 'formik';
import '../../styles/utilities.css';
import '../../styles/index.css';
import './options.css';
import { setStorage } from '../../utils/storage';

const Options = () => {
	return (
		<div>
			<Formik
				initialValues={{
					import: [],
					username: '',
				}}
				onSubmit={(values) => {
					setStorage({ settings: values });
					console.log(values);
				}}
			>
				<Form className="container container--options">
					<div className="title flex">
						<h1 className="ff-cardo fs-900">Settings</h1>
						<button type="submit" className="primary-btn">
							Save Settings
						</button>
					</div>

					<div className="general-settings bg-carousel-pink panel">
						<h2>General</h2>

						<label htmlFor="username">
							Username:
							<Field
								name="username"
								type="text"
								placeholder="Jon"
								className="text-input username"
							/>
						</label>

						<div id="radio-group">Show PrepCards in Context Menu</div>
						<div role="group" aria-labelledby="radio-group">
							<label>
								<Field type="radio" name="contextMenu" value="YES" />
								Yes
							</label>
							<label>
								<Field type="radio" name="contextMenu" value="NO" />
								NO
							</label>
						</div>
					</div>
					<div className="import-options bg-carousel-pink panel">
						<h2>Import Options</h2>
						<div id="checkbox-group">
							Check the boxes of the languages you want to import prepCards for.
						</div>
						<div role="group" aria-labelledby="checkbox-group">
							<label>
								<Field type="checkbox" name="import" value="HTML" />
								HTML
							</label>

							<label>
								<Field type="checkbox" name="import" value="CSS" />
								CSS
							</label>

							<label>
								<Field type="checkbox" name="import" value="JavaScript" />
								JavaScript
							</label>

							<label>
								<Field type="checkbox" name="import" value="Python" />
								Python
							</label>
						</div>
					</div>
					<div className="extras bg-carousel-pink panel">
						<h2>Extras</h2>
						<button className="primary-btn contribute-btn text-seashell">
							<a
								href="https://github.com/htmlHxcker/devPrep"
								target="_blank"
								rel="noopener noreferrer"
							>
								Contribute on GitHub
							</a>
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default Options;
render(<Options />, document.getElementById('options'));
