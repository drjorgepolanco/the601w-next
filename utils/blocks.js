/* Retrieves the first block that it's blockName matches the block namespace with the provided slug */
export const blockBySlug = (obj, slug) => obj.blocks.filter(({ blockName }) => blockName === `ow-blocks/${slug}`)[0];