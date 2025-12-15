declare module "*.css" {

  const content: Record<string, string>;

  export default content;

}

type TOption = { value: string; label: string; disable?: boolean };
