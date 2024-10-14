export interface NavbarMenuItem {
    name: string;
    iconUrl: string;
    label: string;
    subMenus?: Array<NavbarMenuItem>;
    badge?: number;
    action?: Function;
}