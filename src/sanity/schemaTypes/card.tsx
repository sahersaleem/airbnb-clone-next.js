export const card = {
  name: "card",
  title: "Card",
  type: "document",
  fields: [
    {
      name: "countryName",
      title: "CountryName",
      type: "string",
    },
    {
      name: "distance",
      title: "Distance",
      type: "string",
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
    },
    {
      name: "price",
      title: "Prices",
      type: "number",
    },{

        name:"rating",
        title:"Rating",
        type:"number"
     },
      {
        name:"images",
        title:"Images",
        type:'array',
        of:[{type:"image"}]
    
    }
  ],
};
