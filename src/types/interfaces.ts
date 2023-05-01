export interface menuItem {
  name: string,
  link: string
}

export interface menuItemList extends Array<menuItem> { }

export interface Product {
  code: string,
  name: string,
  series: string,
  size: string,
  style ?: string
}