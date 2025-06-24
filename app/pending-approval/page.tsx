"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Check, X, Eye, Clock, Send } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

export default function PendingApprovalPage() {
  const pendingRequests = [
    {
      id: "REQ-005",
      requester: "John Smith",
      department: "Marketing",
      itemName: "MacBook Pro 16-inch",
      category: "Electronics",
      quantity: 1,
      priority: "High",
      requestDate: "2024-01-16",
      justification: "Need for video editing and graphic design work for upcoming campaign",
      estimatedCost: "$2,499",
      status: "Manager Review",
    },
    {
      id: "REQ-006",
      requester: "Sarah Johnson",
      department: "Sales",
      itemName: "Standing Desk Converter",
      category: "Furniture",
      quantity: 1,
      priority: "Medium",
      requestDate: "2024-01-15",
      justification: "Health and ergonomic improvement for daily work",
      estimatedCost: "$299",
      status: "Manager Review",
    },
    {
      id: "REQ-007",
      requester: "Mike Davis",
      department: "IT",
      itemName: "Network Switch",
      category: "Equipment",
      quantity: 2,
      priority: "Urgent",
      requestDate: "2024-01-14",
      justification: "Critical infrastructure upgrade for server room expansion",
      estimatedCost: "$1,200",
      status: "Manager Review",
    },
    {
      id: "REQ-008",
      requester: "Lisa Chen",
      department: "HR",
      itemName: "Office Supplies Bundle",
      category: "Office Supplies",
      quantity: 5,
      priority: "Low",
      requestDate: "2024-01-13",
      justification: "Monthly office supplies for new employee onboarding",
      estimatedCost: "$150",
      status: "Approved by Manager",
    },
  ]

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

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "manager review":
        return "bg-yellow-100 text-yellow-800"
      case "approved by manager":
        return "bg-primary-100 text-primary-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleApprove = (requestId: string) => {
    console.log(`Approving request: ${requestId}`)
    alert(`Request ${requestId} approved! It will now be sent to the store for fulfillment.`)
  }

  const handleReject = (requestId: string) => {
    console.log(`Rejecting request: ${requestId}`)
    alert(`Request ${requestId} rejected and returned to requester.`)
  }

  const handleSendToStore = (requestId: string) => {
    console.log(`Sending request to store: ${requestId}`)
    alert(`Request ${requestId} has been sent to the store for processing.`)
  }

  const managerReviewRequests = pendingRequests.filter((r) => r.status === "Manager Review")
  const approvedRequests = pendingRequests.filter((r) => r.status === "Approved by Manager")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Manager Approval Dashboard</h1>
        <p className="text-muted-foreground">
          Review requests and manage the approval workflow before sending to store
        </p>
      </div>

      {/* Workflow Info */}
      <Card className="border-primary-200 bg-primary-50">
        <CardHeader>
          <CardTitle className="text-primary-800">Approval Workflow</CardTitle>
          <CardDescription className="text-primary-700">
            <strong>Step 1:</strong> Review submitted requests → <strong>Step 2:</strong> Approve/Reject →{" "}
            <strong>Step 3:</strong> Send approved requests to store
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Awaiting Review</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{managerReviewRequests.length}</div>
            <p className="text-xs text-muted-foreground">Need your approval</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ready for Store</CardTitle>
            <Send className="h-4 w-4 text-primary-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{approvedRequests.length}</div>
            <p className="text-xs text-muted-foreground">Approved, ready to send</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Urgent</CardTitle>
            <Badge className="bg-red-100 text-red-800">!</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingRequests.filter((r) => r.priority === "Urgent").length}</div>
            <p className="text-xs text-muted-foreground">High priority items</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <span className="text-sm">$</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,148</div>
            <p className="text-xs text-muted-foreground">Estimated cost</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filter Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search by requester, item name, or request ID..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="it">IT</SelectItem>
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="manager-review">Manager Review</SelectItem>
                <SelectItem value="approved">Approved by Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Manager Review Section */}
      <Card>
        <CardHeader>
          <CardTitle>Requests Awaiting Your Approval</CardTitle>
          <CardDescription>{managerReviewRequests.length} requests need your review</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Requester</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Est. Cost</TableHead>
                  <TableHead>Request Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {managerReviewRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.id}</TableCell>
                    <TableCell>{request.requester}</TableCell>
                    <TableCell>{request.department}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{request.itemName}</p>
                        <p className="text-sm text-muted-foreground">Qty: {request.quantity}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(request.priority)}>{request.priority}</Badge>
                    </TableCell>
                    <TableCell>{request.estimatedCost}</TableCell>
                    <TableCell>{request.requestDate}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Request Details - {request.id}</DialogTitle>
                              <DialogDescription>Review the complete request information</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium">Requester</label>
                                  <p className="text-sm text-muted-foreground">{request.requester}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Department</label>
                                  <p className="text-sm text-muted-foreground">{request.department}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Item Name</label>
                                  <p className="text-sm text-muted-foreground">{request.itemName}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Category</label>
                                  <p className="text-sm text-muted-foreground">{request.category}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Quantity</label>
                                  <p className="text-sm text-muted-foreground">{request.quantity}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Estimated Cost</label>
                                  <p className="text-sm text-muted-foreground">{request.estimatedCost}</p>
                                </div>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Business Justification</label>
                                <p className="text-sm text-muted-foreground mt-1">{request.justification}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Manager Comments</label>
                                <Textarea placeholder="Add your approval/rejection comments here..." className="mt-1" />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button variant="outline" onClick={() => handleReject(request.id)}>
                                <X className="h-4 w-4 mr-2" />
                                Reject
                              </Button>
                              <Button
                                onClick={() => handleApprove(request.id)}
                                className="bg-primary-500 hover:bg-primary-600"
                              >
                                <Check className="h-4 w-4 mr-2" />
                                Approve
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-green-600 hover:text-green-700"
                          onClick={() => handleApprove(request.id)}
                        >
                          <Check className="h-4 w-4" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-600 hover:text-red-700"
                          onClick={() => handleReject(request.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Approved Requests Ready for Store */}
      {approvedRequests.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Approved Requests - Ready to Send to Store</CardTitle>
            <CardDescription>
              {approvedRequests.length} requests approved and ready for store processing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request ID</TableHead>
                    <TableHead>Requester</TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Est. Cost</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {approvedRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>{request.requester}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{request.itemName}</p>
                          <p className="text-sm text-muted-foreground">Qty: {request.quantity}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getPriorityColor(request.priority)}>{request.priority}</Badge>
                      </TableCell>
                      <TableCell>{request.estimatedCost}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(request.status)}>{request.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          onClick={() => handleSendToStore(request.id)}
                          className="bg-primary-500 hover:bg-primary-600"
                        >
                          <Send className="h-4 w-4 mr-2" />
                          Send to Store
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
