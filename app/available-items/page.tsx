import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Package } from "lucide-react"

export default function AvailableItemsPage() {
  const items = [
    {
      id: "ITEM-001",
      name: "Dell XPS 13 Laptop",
      category: "Electronics",
      description: "13-inch laptop with Intel i7 processor, 16GB RAM, 512GB SSD",
      quantity: 5,
      status: "Available",
      location: "IT Storage Room A",
    },
    {
      id: "ITEM-002",
      name: "Ergonomic Office Chair",
      category: "Furniture",
      description: "Adjustable height office chair with lumbar support",
      quantity: 12,
      status: "Available",
      location: "Furniture Warehouse",
    },
    {
      id: "ITEM-003",
      name: "24-inch Monitor",
      category: "Electronics",
      description: "Full HD 1920x1080 LED monitor with HDMI and VGA ports",
      quantity: 8,
      status: "Available",
      location: "IT Storage Room B",
    },
    {
      id: "ITEM-004",
      name: "Wireless Mouse",
      category: "Electronics",
      description: "Optical wireless mouse with USB receiver",
      quantity: 25,
      status: "Available",
      location: "IT Storage Room A",
    },
    {
      id: "ITEM-005",
      name: "Standing Desk",
      category: "Furniture",
      description: "Height-adjustable standing desk converter",
      quantity: 3,
      status: "Low Stock",
      location: "Furniture Warehouse",
    },
    {
      id: "ITEM-006",
      name: "Printer Paper",
      category: "Office Supplies",
      description: "A4 white printer paper, 500 sheets per pack",
      quantity: 0,
      status: "Out of Stock",
      location: "Supply Closet",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "available":
        return "bg-green-100 text-green-800"
      case "low stock":
        return "bg-yellow-100 text-yellow-800"
      case "out of stock":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Available Items</h1>
        <p className="text-muted-foreground">Browse and request items from the inventory</p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Search Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search by item name or description..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="furniture">Furniture</SelectItem>
                <SelectItem value="office-supplies">Office Supplies</SelectItem>
                <SelectItem value="software">Software</SelectItem>
                <SelectItem value="equipment">Equipment</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Items</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="low-stock">Low Stock</SelectItem>
                <SelectItem value="out-of-stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Items Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary-500" />
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                </div>
                <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
              </div>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Category:</span>
                  <p className="text-muted-foreground">{item.category}</p>
                </div>
                <div>
                  <span className="font-medium">Quantity:</span>
                  <p className="text-muted-foreground">{item.quantity}</p>
                </div>
                <div className="col-span-2">
                  <span className="font-medium">Location:</span>
                  <p className="text-muted-foreground">{item.location}</p>
                </div>
              </div>

              <Button
                className="w-full bg-primary-500 hover:bg-primary-600 text-white"
                disabled={item.status === "Out of Stock"}
              >
                <Plus className="h-4 w-4 mr-2" />
                Request Item
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
