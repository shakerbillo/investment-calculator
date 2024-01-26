import React from 'react';

const UserInput = () => {
	return (
		<>
			<section id="user-input">
				<div className="input-group">
					<p>
						<label htmlFor="initial">Initial Investment</label>
						<input type="number" id="initial" name="initial" required />
					</p>
					<p>
						<label htmlFor="annual">Annual Investment</label>
						<input type="number" id="annual" name="annual" required />
					</p>
					<p>
						<label htmlFor="expected">Expected return</label>
						<input type="number" id="expected" name="expected" required />
					</p>
					<p>
						<label htmlFor="duration">Duration</label>
						<input type="number" id="duration" name="duration" required />
					</p>
				</div>
			</section>
		</>
	);
};

export default UserInput;
