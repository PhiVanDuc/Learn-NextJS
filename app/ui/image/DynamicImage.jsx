import Image from "next/image";
import { getImage } from "@/app/lib/getImage"

export default async function DynamicImage({ props }) {
    const { base64, img } = await getImage(props?.src);

    return (
        <Image
            {...props}
            {...img}
            blurDataURL={base64}
        />
    )
}
