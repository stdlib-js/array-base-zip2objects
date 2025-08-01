/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var zeroTo = require( '@stdlib/array-base-zero-to' );
var zip2objects = require( './../lib' );

var x = zeroTo( 10 );
var y = discreteUniform( x.length, -100, 100 );

var labels = [ 'x', 'y' ];

var out = zip2objects( [ x, y ], labels );
console.log( out );
// => [...]
