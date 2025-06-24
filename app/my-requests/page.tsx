import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Eye, Edit, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function MyRequestsPage() {
  const requests = [
    {
      id: "REQ-001",
      itemName: "Dell XPS 13 Laptop",
      category: "Electronics",
      quantity: 1,
      priority: "High",
      status: "Manager Review",
      requestDate: "2024-01-15",
      department: "IT",
    },
    {
      id: "REQ-002",
      itemName: "Ergonomic Office Chair",
      category: "Furniture",
      quantity: 1,
      priority: "Medium",
      status: "Sent to Store",
      requestDate: "2024-01-10",
      department: "HR",
    },
    {
      id: "REQ-003",
      itemName: "24-inch Monitor",
      category: "Electronics",
      quantity: 2,
      priority: "Low",
      status: "Delivered",
      requestDate: "2024-01-05",
      department: "IT",
    },
    {
      id: "REQ-004",
      itemName: "Office Supplies Bundle",
      category: "Office Supplies",
      quantity: 1,
      priority: "Low",
      status: "Rejected by Manager",
      requestDate: "2024-01-01",
      department: "Operations",
    },
    {
      id: "REQ-005",
      itemName: "Wireless Headphones",
      category: "Electronics",
      quantity: 1,
      priority: "Medium",
      status: "Approved by Manager",
      requestDate: "2024-01-12",
      department: "Marketing",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "manager review":
        return "bg-yellow-100 text-yellow-800"
      case "approved by manager":
        return "bg-primary-100 text-primary-800"
      case "sent to store":
        return "bg-blue-100 text-blue-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      case "rejected by manager":
        return "bg-red-100 text-red-800"
      case "rejected by store":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "urgent":
        return "bg-red-100 text-red-800"
      case "high":
        return "bg-orange-100 text-orange-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Requests</h1>
        <p className="text-muted-foreground">View and manage all your submitted item requests</p>
      </div>

      {/* Workflow Info */}
      <Card className="border-primary-200 bg-primary-50">
        <CardHeader>
          <CardTitle className="text-primary-800">Request Workflow</CardTitle>
          <CardDescription className="text-primary-700">
            All requests follow this approval process: Submitted → Manager Review → Approved → Sent to Store → Delivered
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filter Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search by item name or request ID..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="manager-review">Manager Review</SelectItem>
                <SelectItem value="approved-by-manager">Approved by Manager</SelectItem>
                <SelectItem value="sent-to-store">Sent to Store</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Requests Table */}
      <Card>
        <CardHeader>
          <CardTitle>Request History</CardTitle>
          <CardDescription>{requests.length} total requests found</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Item Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Request Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.id}</TableCell>
                    <TableCell>{request.itemName}</TableCell>
                    <TableCell>{request.category}</TableCell>
                    <TableCell>{request.quantity}</TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(request.priority)}>{request.priority}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(request.status)}>{request.status}</Badge>
                    </TableCell>
                    <TableCell>{request.requestDate}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {request.status === "Manager Review" && (
                          <>
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
