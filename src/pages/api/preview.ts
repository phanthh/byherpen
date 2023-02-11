import { NextApiRequest, NextApiResponse } from "next";
import { getPost } from "shared/lib/api";

export default async function preview(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { secret, slug } = req.query;
	if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
		return res.status(401).json({ message: "Invalid token" });
	}

	const post = (await getPost(slug as string, true, 0)).post;

	if (!post) {
		return res.status(401).json({ message: "Invalid slug" });
	}

	res.setPreviewData({});

	const url = `/posts/${post.slug}`;
	res.setHeader("Content-Type", "text/html");
	res.write(
		`<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>
    </html>`
	);
	res.end();
}
