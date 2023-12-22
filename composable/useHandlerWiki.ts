import {dataWiki} from "~/data/dataWiki";

export function useHandlerWiki(title: string, method: any) {
    const currentData = dataWiki[method]
    return currentData.content[title]

}
