import {generateLocaleParams} from '@/src/lib/routes';

export const dynamic = 'force-static';
export const revalidate = false;

export const generateStaticParams = generateLocaleParams;

export {default} from '../precos/page';
