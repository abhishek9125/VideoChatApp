
const postInvite = async (req, res) => {
	const { targetMailAddress } = req.body;

	return res.status(201).send("Invitation has been sent");
};

module.exports = postInvite;
