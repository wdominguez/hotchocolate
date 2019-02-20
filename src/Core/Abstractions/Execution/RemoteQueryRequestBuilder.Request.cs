using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace HotChocolate.Execution
{
    public partial class QueryRequestBuilder
    {
        private class QueryRequest
            : IReadOnlyQueryRequest
        {
            public string Query { get; set; }

            public string OperationName { get; set; }

            public IReadOnlyDictionary<string, object> VariableValues
            { get; set; }

            public object InitialValue { get; set; }

            public IReadOnlyDictionary<string, object> Properties { get; set; }

            public IServiceProvider Services { get; set; }
        }
    }
}
