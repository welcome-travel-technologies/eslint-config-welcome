export default {
  "react/jsx-filename-extension": [
    1,
    {
      extensions: [".js", ".jsx"]
    }
  ],
  "react/prop-types": 0,
  "jsx-a11y/label-has-for": 0,
  "react/jsx-no-duplicate-props": 2,
  "react/jsx-no-target-blank": 2,
  "react/sort-comp": [
    2,
    {
      order: [
        "properties",
        "static-methods",
        "everything-else",
        "lifecycle",
        "rendering"
      ],
      groups: {
        properties: ["state"],
        rendering: ["/^render.+$/", "render"]
      }
    }
  ]
};
