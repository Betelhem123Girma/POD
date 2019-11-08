define({ "api": [
  {
    "type": "user",
    "url": "/pod/addMenuItems",
    "title": "Add menuItems",
    "name": "AddMenuItems",
    "group": "MenuItems",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n    \"ingredient\": [],\n    \"rating\": 3,\n    \"payed\": false,\n    \"date_created\": \"2019-11-08T05:35:17.300Z\",\n    \"date_modified\": \"2019-11-08T05:35:17.300Z\",\n    \"_id\": \"5dc4fe955a98e200242666f1\",\n    \"menuItem_name\": \"Black forest\",\n    \"price\": 50,\n    \"description\": \"This is a nice dessert\",\n    \"catagory\": \"Dessert\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request",
          "content": "{\n\"menuItem_name\":\"Black forest\",\n\"price\":50,\n\"ingredient\":[],\n\"rating\":3,\n\"description\":\"This is a nice dessert\",\n\"catagory\":\"Dessert\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/menuItem.js",
    "groupTitle": "MenuItems"
  },
  {
    "type": "get",
    "url": "/pod/menuItems",
    "title": "Get all menuItem with specific catagory",
    "name": "GetMenuItems",
    "group": "MenuItems",
    "version": "0.0.1",
    "parameter": {
      "examples": [
        {
          "title": "Request",
          "content": "{\n\n\"catagory\":\"Dessert\"\n}\n    {\n        \"ingredient\": [],\n        \"rating\": null,\n        \"payed\": false,\n        \"date_created\": \"2019-11-07T23:18:45.871Z\",\n        \"date_modified\": \"2019-11-07T23:18:45.871Z\",\n        \"_id\": \"5dc4a6551bdd5a00241e1018\",\n        \"menuItem_name\": \"Black forest\",\n        \"price\": 50,\n        \"description\": \"This is a nice dessert\",\n        \"catagory\": \"Dessert\",\n        \"__v\": 0\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/menuItem.js",
    "groupTitle": "MenuItems"
  },
  {
    "type": "patch",
    "url": "/pod/rate",
    "title": "Rate menuItem",
    "name": "RateMenuItems",
    "group": "MenuItems",
    "version": "0.0.1",
    "filename": "routes/menuItem.js",
    "groupTitle": "MenuItems"
  },
  {
    "type": "user",
    "url": "/pod/searchMenuItem",
    "title": "Search for menuItem",
    "name": "SearchMenuItems",
    "group": "MenuItems",
    "version": "0.0.1",
    "filename": "routes/menuItem.js",
    "groupTitle": "MenuItems"
  },
  {
    "type": "post",
    "url": "/orders/add",
    "title": "Add orders",
    "name": "AddOrders",
    "group": "Order",
    "version": "0.0.1",
    "filename": "routes/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/orders/delete/:orderId",
    "title": "Delete order",
    "name": "DeleteOrder",
    "group": "Order",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n    \"message\": \"Order deleted\",\n    \"request\": {\n        \"type\": \"POST\",\n        \"url\": \"http://localhost:3000/orders\",\n        \"body\": {\n            \"productId\": \"ID\",\n            \"quantity\": \"Number\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/orders/",
    "title": "Get all orders",
    "name": "GetOrders",
    "group": "Order",
    "version": "0.0.1",
    "parameter": {
      "examples": [
        {
          "title": "Request",
          "content": "{\n\n\"userId\":\"5dc43d0f4856e30024bf8983\",\n\"menuItemId\":[\"5dc4a6551bdd5a00241e1018\"],\n\"order_name\":\"Bety order\",\n\"order_quantity\":2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n    \"message\": \"Order stored\",\n    \"createdOrder\": {\n        \"_id\": \"5dc502cc5a98e200242666f2\",\n        \"menuItems\": [\n            \"5dc4a6551bdd5a00241e1018\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/orders/",
    "title": "Get all orders",
    "name": "GetOrders",
    "group": "Order",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": " {\n    \"message\": \"Order stored\",\n    \"createdOrder\": {\n        \"_id\": \"5dc502cc5a98e200242666f2\",\n        \"menuItems\": [\n            \"5dc4a6551bdd5a00241e1018\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "user",
    "url": "/users/",
    "title": "Create User",
    "name": "CreateUser",
    "group": "User",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t\"email\": \"john.doe@example.com\",\n\t\"password\": \"plain-text-password\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The ID of the newly created User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The hashed password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>The date on which the User entry was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": "<p>The date on which the User entry was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n\t {\n\t\t _id: '58a1ea8b36dfb71d975384af',\n\t\temail: \"john.doe@example.com\",\n \tpassword: \"$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy\",\n\t\tdate_created: 2017-02-13T17:19:08.404Z,\n\t\tdate_modified: 2017-02-13T17:19:08.404Z,\n\t }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "user",
    "url": "/users/",
    "title": "Login User",
    "name": "LoginUser",
    "group": "User",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t\"email\": \"john.doe@example.com\",\n\t\"password\": \"plain-text-password\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message confirming success of Authentication.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The JWT token for the logged in user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n\t {\n\t\t message: 'Auth Successful',\n \t token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJ1c2VySWQiOiI1YmQ2ZjRjZTFlMWZmOTUwNzg2Y2Y4MmEiLCJpYXQiOjE1NDA4MTc1MzcsImV4cCI6MTU0MDgyMTEzN30\"\n\t }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "User"
  }
] });
