export default async function (req, res) {
    console.log("revalidated");
    res.status(200).json({ message: "Revalidated" });
}
