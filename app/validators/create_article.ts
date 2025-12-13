import vine from '@vinejs/vine'

export const createArticleSchema = vine.compile(vine.object({
            title: vine.string(),
            content: vine.string(),
            image: vine.string().optional(),
            
            //email: vine.string().email(),
        }));