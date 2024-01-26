const UserInput = ({ onChangeInput, userInput }) => {
	return (
		<>
			<section id="user-input">
				<div className="input-group">
					<p>
						<label htmlFor="initial">Initial Investment</label>
						<input
							type="number"
							id="initial"
							name="initial"
							value={userInput.initialInvestment}
							required
							onChange={(e) =>
								onChangeInput('initialInvestment', e.target.value)
							}
						/>
					</p>
					<p>
						<label htmlFor="annual">Annual Investment</label>
						<input
							type="number"
							id="annual"
							name="annual"
							value={userInput.annualInvestment}
							required
							onChange={(e) =>
								onChangeInput('annualInvestment', e.target.value)
							}
						/>
					</p>
				</div>
				<div className="input-group">
					<p>
						<label htmlFor="expected">Expected return</label>
						<input
							type="number"
							id="expected"
							name="expected"
							value={userInput.expectedReturn}
							required
							onChange={(e) => onChangeInput('expectedReturn', e.target.value)}
						/>
					</p>
					<p>
						<label htmlFor="duration">Duration</label>
						<input
							type="number"
							id="duration"
							name="duration"
							value={userInput.duration}
							required
							onChange={(e) => onChangeInput('duration', e.target.value)}
						/>
					</p>
				</div>
			</section>
		</>
	);
};

export default UserInput;
