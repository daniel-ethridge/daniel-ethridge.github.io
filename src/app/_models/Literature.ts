export interface Literature {
    title: string,
    year: number,

    authors?: string,
    month?: number,
    link?: string,
    goal?: string,
    methods?: string,
    results?: string,
    discussion?: string,
    tags?: string[],

    id?: number  // Automatically set. Manually set values in the json fileare overwritten
}

/**
 * Potential later ideas:
 * - create further optional slots for volume, issue, conference name, proceedings, and 
 */