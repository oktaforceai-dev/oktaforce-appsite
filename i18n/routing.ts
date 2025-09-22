// i18n/routing.ts
import {createNavigation} from 'next-intl/navigation';
import routing from '@/next-intl.config';

export const {Link, usePathname, useRouter, redirect, getPathname} =
  createNavigation(routing);

export {routing};
