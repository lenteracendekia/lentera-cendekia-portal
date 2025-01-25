import { CONTENT } from "@/constants/content"

export const getTestimonyByName = (name: string) => {
    return CONTENT.testimonials.filter((testimony) => {
        const nameLowerCase = testimony.name.toLowerCase().replace(/\s/g, "-");
        return nameLowerCase === name
    })[0]
}
