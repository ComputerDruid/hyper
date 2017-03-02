(function() {var implementors = {};
implementors["hyper"] = ["impl&lt;K, V, S&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;<a class="primitive" href="https://doc.rust-lang.org/nightly/std/primitive.tuple.html">(</a>K, V<a class="primitive" href="https://doc.rust-lang.org/nightly/std/primitive.tuple.html">)</a>&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html" title="struct std::collections::hash::map::HashMap">HashMap</a>&lt;K, V, S&gt; <span class="where fmt-newline">where K: <a class="trait" href="https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html" title="trait core::cmp::Eq">Eq</a> + <a class="trait" href="https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html" title="trait core::hash::Hash">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S: <a class="trait" href="https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html" title="trait core::hash::BuildHasher">BuildHasher</a></span>","impl&lt;'a, K, V, S&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;<a class="primitive" href="https://doc.rust-lang.org/nightly/std/primitive.tuple.html">(</a>&amp;'a K, &amp;'a V<a class="primitive" href="https://doc.rust-lang.org/nightly/std/primitive.tuple.html">)</a>&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html" title="struct std::collections::hash::map::HashMap">HashMap</a>&lt;K, V, S&gt; <span class="where fmt-newline">where K: <a class="trait" href="https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html" title="trait core::cmp::Eq">Eq</a> + <a class="trait" href="https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html" title="trait core::hash::Hash">Hash</a> + <a class="trait" href="https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html" title="trait core::marker::Copy">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S: <a class="trait" href="https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html" title="trait core::hash::BuildHasher">BuildHasher</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V: <a class="trait" href="https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html" title="trait core::marker::Copy">Copy</a></span>","impl&lt;T, S&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;T&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html" title="struct std::collections::hash::set::HashSet">HashSet</a>&lt;T, S&gt; <span class="where fmt-newline">where S: <a class="trait" href="https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html" title="trait core::hash::BuildHasher">BuildHasher</a>, T: <a class="trait" href="https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html" title="trait core::cmp::Eq">Eq</a> + <a class="trait" href="https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html" title="trait core::hash::Hash">Hash</a></span>","impl&lt;'a, T, S&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;&amp;'a T&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html" title="struct std::collections::hash::set::HashSet">HashSet</a>&lt;T, S&gt; <span class="where fmt-newline">where S: <a class="trait" href="https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html" title="trait core::hash::BuildHasher">BuildHasher</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + <a class="trait" href="https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html" title="trait core::cmp::Eq">Eq</a> + <a class="trait" href="https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html" title="trait core::hash::Hash">Hash</a> + <a class="trait" href="https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html" title="trait core::marker::Copy">Copy</a></span>","impl&lt;P&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;P&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html" title="struct std::path::PathBuf">PathBuf</a> <span class="where fmt-newline">where P: <a class="trait" href="https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html" title="trait core::convert::AsRef">AsRef</a>&lt;<a class="struct" href="https://doc.rust-lang.org/nightly/std/path/struct.Path.html" title="struct std::path::Path">Path</a>&gt;</span>","impl&lt;A&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;A::Item&gt; for SmallVec&lt;A&gt; <span class="where fmt-newline">where A: Array</span>","impl&lt;T&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;T&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/binary_heap/struct.BinaryHeap.html" title="struct collections::binary_heap::BinaryHeap">BinaryHeap</a>&lt;T&gt; <span class="where fmt-newline">where T: <a class="trait" href="https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html" title="trait core::cmp::Ord">Ord</a></span>","impl&lt;'a, T&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;&amp;'a T&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/binary_heap/struct.BinaryHeap.html" title="struct collections::binary_heap::BinaryHeap">BinaryHeap</a>&lt;T&gt; <span class="where fmt-newline">where T: 'a + <a class="trait" href="https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html" title="trait core::marker::Copy">Copy</a> + <a class="trait" href="https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html" title="trait core::cmp::Ord">Ord</a></span>","impl&lt;K, V&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;<a class="primitive" href="https://doc.rust-lang.org/nightly/std/primitive.tuple.html">(</a>K, V<a class="primitive" href="https://doc.rust-lang.org/nightly/std/primitive.tuple.html">)</a>&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/btree/map/struct.BTreeMap.html" title="struct collections::btree::map::BTreeMap">BTreeMap</a>&lt;K, V&gt; <span class="where fmt-newline">where K: <a class="trait" href="https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html" title="trait core::cmp::Ord">Ord</a></span>","impl&lt;'a, K, V&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;<a class="primitive" href="https://doc.rust-lang.org/nightly/std/primitive.tuple.html">(</a>&amp;'a K, &amp;'a V<a class="primitive" href="https://doc.rust-lang.org/nightly/std/primitive.tuple.html">)</a>&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/btree/map/struct.BTreeMap.html" title="struct collections::btree::map::BTreeMap">BTreeMap</a>&lt;K, V&gt; <span class="where fmt-newline">where K: <a class="trait" href="https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html" title="trait core::marker::Copy">Copy</a> + <a class="trait" href="https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html" title="trait core::cmp::Ord">Ord</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V: <a class="trait" href="https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html" title="trait core::marker::Copy">Copy</a></span>","impl&lt;T&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;T&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html" title="struct collections::btree::set::BTreeSet">BTreeSet</a>&lt;T&gt; <span class="where fmt-newline">where T: <a class="trait" href="https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html" title="trait core::cmp::Ord">Ord</a></span>","impl&lt;'a, T&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;&amp;'a T&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html" title="struct collections::btree::set::BTreeSet">BTreeSet</a>&lt;T&gt; <span class="where fmt-newline">where T: 'a + <a class="trait" href="https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html" title="trait core::marker::Copy">Copy</a> + <a class="trait" href="https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html" title="trait core::cmp::Ord">Ord</a></span>","impl&lt;E&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;E&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html" title="struct collections::enum_set::EnumSet">EnumSet</a>&lt;E&gt; <span class="where fmt-newline">where E: <a class="trait" href="https://doc.rust-lang.org/nightly/collections/enum_set/trait.CLike.html" title="trait collections::enum_set::CLike">CLike</a></span>","impl&lt;'a, E&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;&amp;'a E&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html" title="struct collections::enum_set::EnumSet">EnumSet</a>&lt;E&gt; <span class="where fmt-newline">where E: 'a + <a class="trait" href="https://doc.rust-lang.org/nightly/collections/enum_set/trait.CLike.html" title="trait collections::enum_set::CLike">CLike</a> + <a class="trait" href="https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html" title="trait core::marker::Copy">Copy</a></span>","impl&lt;T&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;T&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html" title="struct collections::linked_list::LinkedList">LinkedList</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;&amp;'a T&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html" title="struct collections::linked_list::LinkedList">LinkedList</a>&lt;T&gt; <span class="where fmt-newline">where T: 'a + <a class="trait" href="https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html" title="trait core::marker::Copy">Copy</a></span>","impl <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;<a class="primitive" href="https://doc.rust-lang.org/nightly/std/primitive.char.html">char</a>&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/string/struct.String.html" title="struct collections::string::String">String</a>","impl&lt;'a&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;&amp;'a <a class="primitive" href="https://doc.rust-lang.org/nightly/std/primitive.char.html">char</a>&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/string/struct.String.html" title="struct collections::string::String">String</a>","impl&lt;'a&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;&amp;'a <a class="primitive" href="https://doc.rust-lang.org/nightly/std/primitive.str.html">str</a>&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/string/struct.String.html" title="struct collections::string::String">String</a>","impl <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;<a class="struct" href="https://doc.rust-lang.org/nightly/collections/string/struct.String.html" title="struct collections::string::String">String</a>&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/string/struct.String.html" title="struct collections::string::String">String</a>","impl&lt;T&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;T&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html" title="struct collections::vec::Vec">Vec</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;&amp;'a T&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html" title="struct collections::vec::Vec">Vec</a>&lt;T&gt; <span class="where fmt-newline">where T: 'a + <a class="trait" href="https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html" title="trait core::marker::Copy">Copy</a></span>","impl&lt;A&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;A&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html" title="struct collections::vec_deque::VecDeque">VecDeque</a>&lt;A&gt;","impl&lt;'a, T&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;&amp;'a T&gt; for <a class="struct" href="https://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html" title="struct collections::vec_deque::VecDeque">VecDeque</a>&lt;T&gt; <span class="where fmt-newline">where T: 'a + <a class="trait" href="https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html" title="trait core::marker::Copy">Copy</a></span>","impl&lt;'a&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;<a class="struct" href="hyper/header/struct.HeaderView.html" title="struct hyper::header::HeaderView">HeaderView</a>&lt;'a&gt;&gt; for <a class="struct" href="hyper/header/struct.Headers.html" title="struct hyper::header::Headers">Headers</a>","impl&lt;'a&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/core/iter/traits/trait.Extend.html" title="trait core::iter::traits::Extend">Extend</a>&lt;<a class="primitive" href="https://doc.rust-lang.org/nightly/std/primitive.tuple.html">(</a>&amp;'a <a class="primitive" href="https://doc.rust-lang.org/nightly/std/primitive.str.html">str</a>, Bytes<a class="primitive" href="https://doc.rust-lang.org/nightly/std/primitive.tuple.html">)</a>&gt; for <a class="struct" href="hyper/header/struct.Headers.html" title="struct hyper::header::Headers">Headers</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
