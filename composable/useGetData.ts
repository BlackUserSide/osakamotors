import {dataWiki} from "~/data/dataWiki";

export function useGetData(router: any) {
    const restoreRouter = router.fullPath.split('/')[1]
    switch (restoreRouter) {
        case 'howtobuy':
            return dataWiki.howtobuy
    }
}
